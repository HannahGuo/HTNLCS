const LanguageAPI = {};

LanguageAPI.grade = async function (data) {
    const response = await fetch("/api/grade", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            ...data,
            content: data.text
        })
    });
    const responseData = await response.json();
    return responseData;
};