//@ts-check
const express = require("express");
const spellCheck = require("./src/utils/spellCheck");
const analyzeSyntax = require("./src/utils/analyzeSyntax");
const firebase = require("firebase-admin");
const app = express();
const server = require("http").createServer(app);
const socket = require("socket.io")(server);

app.use(require("body-parser").json());

firebase.initializeApp({
    // @ts-ignore
    credential: firebase.credential.cert(require("./config/firebaseConfig.json")),
    databaseURL: "https://htn-lcs.firebaseio.com"
});

const database = firebase.database();

/**
 * @typedef GradeRequest
 * /api/grade request parameters.
 * @property {string} text
 * @property {string} language 
 */

/**
 * @typedef ConnectRequest
 * @property {string} language Language you want to meet up with.
 * @property {string} name Name of the user.
 * @property {string} information Information to parse to get keywords. (e.g. a bio, game developer)
 */


 app.get("/test", (req, res) => res.send("asd"));

// Grades a message
app.post("/api/grade", async (req, res) => {
    const data = /** @type {GradeRequest} */(req.body);

    const spellCheckData = await spellCheck(data.text);

    const sentences = data.text.split(/\?|\.|\!/)
        .filter(sentence => sentence.length > 0);

    let correctResponse = data.text;

    for (const data of spellCheckData) {
        const { suggestion } = data.suggestions[0];
        correctResponse = correctResponse
            .replace(data.token, suggestion);
    }

    const syntax = await analyzeSyntax(data.text);
    const nounsAndVerbs = syntax.filter(w => w.partOfSpeech.tag === "NOUN" || w.partOfSpeech.tag === "VERB")
        .map(word => word.text.content.toLocaleLowerCase());
    const uniqueWords = nounsAndVerbs
        .filter((word, i) => nounsAndVerbs.indexOf(word) === i);

    const spellingGrade = correctResponse.trim().split("").filter((c, i) => data.text.trim().charAt(i) === c).length / correctResponse.length * 100; // How many characters are in the correct position?
    const uniquenessGrade = uniqueWords.length / nounsAndVerbs.length * 100; // TODO: analyzeSyntax and check previous conversations.

    const mostCommonWords = {};
    for (const word of nounsAndVerbs) {
        mostCommonWords[word] = (mostCommonWords[word] || 0) + 1;
    }

    const tooCommonWords = [];
    for (const word in mostCommonWords) {
        if (mostCommonWords[word] > 3) {
            tooCommonWords.push(word);
        }
    }    

    const payload = {
        grade: {
            total: (spellingGrade + uniquenessGrade) / 2,
            spelling: spellingGrade,
            uniqueness: uniquenessGrade
        },
        words: {
            commonlyUsed: tooCommonWords
        },
        majorImprovements: [], // TODO: Language level
        text: data.text,
        averageWordsPerSentence: sentences.map(sentence => sentence.split(/ +/).filter(word => word.length > 0).length)
            .reduce((a, b) => {
                return a + b
            }, 0) / sentences.length
    };

    database.ref("grades").push(payload);

    res.json(payload);

});

socket.on("connection", s => {
    /** @type {string} */
    let room;
    let name;
    s.on("joinRequest", /** @param {ConnectRequest} data */data => {
        room = `lang-${data.language}`;
        s.join(room);
        name = data.name;
        s.emit("room", room);
    });

    s.on("message", message => {
        socket.emit("message", {
            message,
            language: room,
            name
        }); // TODO: Not important right now but filtering for xss.
    });
});

server.listen(1010, () => {
    console.log("Listening.");
});