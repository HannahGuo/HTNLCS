const path = require("path");
const language = require("@google-cloud/language");

const languageClient = new language.LanguageServiceClient({
    projectId: language.project_id,
    keyFilename: path.join(__dirname, "..", "..", "config", "googleConfig.json")
});

const analyzeSyntax = async content => {
    const [ result ] = await languageClient.analyzeSyntax({
        document: {
            content,
            type: "PLAIN_TEXT"
        }
    });
    return result.tokens;
};

module.exports = analyzeSyntax;