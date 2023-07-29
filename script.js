// const CHATGPT_API_KEY = "paste your API key here" <- a number of online tutorials will recommend you to do this. If it is a private sheet, this is fine but if you plan to share, do not that your key will most definitely be exposed

// declare const or endpoint for completions
const BASE_URL = "https://api.openai.com/v1/chat/completions";

// create a function to fetch data from openAI
function fetchData(systemContent, userContent) {
  try {
    const headers = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${CHAT_GPT_API_KEY}`
    };

    const options = {
      headers,
      method: "GET",
      muteHttpExceptions: true,
      payload: JSON.stringify({
        "model": "gpt-3.5-turbo",
        "messages": [{
          "role": "system",
          "content": systemContent,
        },
        {
          "role": "user",
          "content": userContent
        },
        ],
        "temperature": 0.7
      })
    };

    const response = JSON.parse(UrlFetchApp.fetch(BASE_URL, options));
    //console.log(response);
    //console.log(response.choices[0].message.content)
    return response.choices[0].message.content;
  } catch (e) {
    console.log(e)
    SpreadsheetApp.getActiveSpreadsheet().toast("Some Error Occured Please check your formula or try again later.");
    return "Some Error Occured Please check your formula or try again later.";
  }
}
