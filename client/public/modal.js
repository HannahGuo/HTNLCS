const ModalAPI = {};

/**
 * @typedef ModalOptions
 * @property {string} title Title
 * @property {string} description Desc.
 */

window.addEventListener("load", () => {
    /**
     * @param {ModalOptions} options
     */
    ModalAPI.show = options => {
        document.querySelector("div[data-modal='background']").removeAttribute("data-hidden");
        document.querySelector("div[data-modal='content']").removeAttribute("data-hidden");
        document.querySelector("div[data-modal='content'] h2").textContent = options.title;
        document.documentElement.scrollTop = 0;
    };

    ModalAPI.hide = () => {
        document.querySelector("div[data-modal='background']").setAttribute("data-hidden", "");
        document.querySelector("div[data-modal='content']").setAttribute("data-hidden", "");
    };

    document.querySelector("span[data-modal='delete']").addEventListener("click", () => ModalAPI.hide());

    setInterval(() => {
        document.querySelector("div[data-modal='background']").style.height = (document.body.scrollHeight + 100)+"px"; // E We're running out of time.
    }, 100);
});