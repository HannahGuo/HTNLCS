const { API_KEY } = require("../../config/bingSpellCheck.json");
const { URLSearchParams } = require("url");
const fetch = require("node-fetch");

const url = "https://api.cognitive.microsoft.com/bing/v7.0/spellcheck";

/**
 * @typedef SpellCheckOptions
 * @property {?number} [retryDelay=1000]
 */

/**
 * Spell check.
 * @param {string} text
 * @param {SpellCheckOptions} [options]
 */
const spellCheck = async (text, options) => {
    options = Object.assign({
        retryDelay: 1000
    }, options || {});
    const body = new URLSearchParams();
    body.append("Content-Type", "application/x-www-form-urlencoded");
    body.append("text", text);
    const response = await (await fetch(`${url}?mode=proof`, {
        body,
        method: "POST",
        headers: {
            "Ocp-Apim-Subscription-Key": API_KEY
        }
    })).json();
    if (response.error) {
        const result = await new Promise(r => {
            setTimeout(async () => {
                const result = await spellCheck(text, {
                    ...options
                });
                r(result);
            }, options.retryDelay);
        });
        return result;
    }
    return response.flaggedTokens;
};

module.exports = spellCheck;