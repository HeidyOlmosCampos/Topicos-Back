const config = require('../config/config');
const {
  Configuration,
  OpenAIApi
} = require('openai');
const configuration = new Configuration({
  apiKey: config.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


// async function runCompletion () {
//   const completion = await openai.createCompletion({
//     model: "text-davinci-003",
//     prompt: "Como estas hoy?",

//   });
//   console.log(completion.data.choices[0].text);
// }

module.exports = openai;
