const database = firebase.database();

const chatTable = database.ref("chat");

const username = localStorage.getItem("username");
const channel = "english";


const styles = {
    ours: "float: left; max-width: 40%; min-height: 25px; padding: 1%; margin-left: 1%; background: lightblue; color: white; margin-top: 1%; margin-bottom: 1%; overflow-x: hidden;",
    theirs: "float: right; max-width: 40%; min-height: 25px; padding: 1%; margin-right: 1%; background: gray; color: white; margin-top: 1%; margin-bottom: 1%; overflow-x: hidden;",
    line: "width: 100%; float: left; text-align: center; color: black; margin-bottom: 1%;"
};

let conversation = "";

window.addEventListener("load", () => {

    chatTable.push({
        message: "",
        author: username,
        type: "join",
        channel, //TODO
    });

    const sendChatMessage = async () => {
        const value = document.querySelector("#chatInput").value;
        document.querySelector("#chatInput").value = "";
        if (value.length === 0) return;
        if (value.toLocaleLowerCase() === "/done") { // We're done. Let's analyze our data.

            chatTable.push({
                message: "",
                author: username,
                type: "leave",
                channel, //TODO
            });
            document.querySelector("#chatInput").disabled = true;

            const data = await LanguageAPI.grade({
                channel,
                username,
                text: conversation,
                language: channel
            });
            
            // TODO: DO SOMETHING WITH THAT DATA.
            console.log(data);
            return;
        }
        conversation += value + " ";
        chatTable.push({
            message: value,
            author: username,
            type: "message",
            channel, //TODO
        });
    };

    chatTable.on("value", snapshot => {

        

        const messages = snapshot.val();
        for (const id in messages) {
            if (!document.querySelector(`div[message-id="${id}"]`) && messages[id].channel === channel) {
                if (messages[id].type === "message") {
                    const messageEl = document.createElement("div");
                    messageEl.setAttribute("message-id", id);
                    messageEl.setAttribute("style", messages[id].author === username ? styles.ours : styles.theirs);
                    messageEl.textContent = messages[id].message;
                    document.querySelector("#chatBox").appendChild(messageEl);
                } else if (messages[id].type === "leave") {
                    const messageEl = document.createElement("div");
                    messageEl.setAttribute("message-id", id);
                    messageEl.setAttribute("style", styles.line);
                    messageEl.textContent = `${messages[id].author} has ended their conversation.`;
                    document.querySelector("#chatBox").appendChild(messageEl);
                } else {
                    const messageEl = document.createElement("div");
                    messageEl.setAttribute("message-id", id);
                    messageEl.setAttribute("style", styles.line);
                    messageEl.textContent = `${messages[id].author} has joined the conversation.`;
                    document.querySelector("#chatBox").appendChild(messageEl);
                }
                const breakEl = document.createElement("div");
                    breakEl.setAttribute("style", styles.line);
                    document.querySelector("#chatBox").appendChild(breakEl);
                    document.querySelector("#chatBox").scrollTop = document.querySelector("#chatBox").scrollHeight;
            }
        }
    });

    document.querySelector("#sendChatButton").addEventListener("click", sendChatMessage);
    document.querySelector("#chatInput").addEventListener("keydown", e => {
        if (e.keyCode === 13) sendChatMessage();
    });
});