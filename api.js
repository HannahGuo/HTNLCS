const ChatAPI = {
    listeners: {},
    myRoom: null
};

/**
 * @typedef ConnectData
 * @property {string} language Language you want to meet up with.
 * @property {string} name Name of the user.
 * @property {string} information Information to parse to get keywords. (e.g. a bio, interests)
 */

/**
 * Connect to the chat server.
 * @param {ConnectData} data
 */
ChatAPI.connect = function (data) {
    this._io.emit("joinRequest", {
        ...data
    });
};

ChatAPI.on = function (event, callback) {
    ChatAPI.listeners[event] = (ChatAPI.listeners[event] || []).concat(callback);
};

ChatAPI.emit = function (event, ...args) {
    (ChatAPI.listeners[event] || []).map(callback => callback.apply(null, args));
};

ChatAPI.io = io();

// "ready" event gives you the room name to listen for.
// "message" event gives data when any message is sent to any room.

const LanguageAPI = {};

LanguageAPI.grade = async function (content, language) {
    const response = await fetch("/api/grade", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            language,
            text: content
        })
    });
    return response;
};