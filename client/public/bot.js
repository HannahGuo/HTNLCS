const database = firebase.database();

const chatTable = database.ref("chat");

window.addEventListener("load", () => {

    const sendChatMessage = () => {
        const value = document.querySelector("#chatInput").value;
        document.querySelector("#chatInput").value = "";
        chatTable.push({
            message: value,
            author: "our user id", //TODO
            channel: "whatever channel id this is in" //TODO
        });
    };

    document.querySelector("#sendChatButton").addEventListener("click", sendChatMessage);
    document.querySelector("#chatInput").addEventListener("keydown", e => {
        if (e.keyCode === 13) sendChatMessage();
    });
});