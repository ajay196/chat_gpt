const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function chatController (req, res, next) {
  try{
    const message = req.body.message
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: message,
      temperature: 0,
      max_tokens:4095 - message.split(" ").length,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0
    }).catch(err=>{
      throw err;
    });
    return res.send({error: false, message: completion.data.choices[0].text});
  }catch(err){
    console.log(err);
    return res.send(err.message);
  }

}

module.exports = {chatController}