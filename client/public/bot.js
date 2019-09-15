const database = firebase.database();

const chatTable = database.ref("chat");

const username = localStorage.getItem("username");
const channel = "debug";


const styles = {
    ours: "float: left; max-width: 40%; padding: 1%; margin-left: 1%; background: lightblue; color: white; margin-top: 1%;",
    theirs: "float: right; max-width: 40%; padding: 1%; margin-right: 1%; background: gray; color: white; margin-top: 1%;",
    line: "width: 100%; float: left;"
};


window.addEventListener("load", () => {

    const sendChatMessage = () => {
        const value = document.querySelector("#chatInput").value;
        document.querySelector("#chatInput").value = "";
        chatTable.push({
            message: value,
            author: username, //TODO
            channel //TODO
        });
    };

    chatTable.on("value", snapshot => {
        const messages = snapshot.val();
        for (const id in messages) {
            if (!document.querySelector(`div[message-id="${id}"]`) && messages[id].channel === channel) {
                const messageEl = document.createElement("div");
                messageEl.setAttribute("message-id", id);
                messageEl.setAttribute("style", messages[id].author === username ? styles.ours : styles.theirs);
                messageEl.textContent = messages[id].message;
                document.querySelector("#chatBox").appendChild(messageEl);
                
                const breakEl = document.createElement("div");
                breakEl.setAttribute("style", styles.line);
                document.querySelector("#chatBox").appendChild(breakEl);
            }
        }
    });

    document.querySelector("#sendChatButton").addEventListener("click", sendChatMessage);
    document.querySelector("#chatInput").addEventListener("keydown", e => {
        if (e.keyCode === 13) sendChatMessage();
    });
});