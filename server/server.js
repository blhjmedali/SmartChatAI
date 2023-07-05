const express = require('express')
const cors = require('cors')

// Open Ai
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({apiKey: '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',});
const openai = new OpenAIApi(configuration);

const app = express()

app.use(cors())
app.use(express.json())

let conversationHistory = [];


app.post('/open', async (req, res)=>{

    // Add user message to the conversation history
    conversationHistory.push({ role: 'user', content: req.body.question });

    try {
        const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: conversationHistory,

        });
        const response = completion.data.choices[0].message.content
        res.json(response);
    }catch (e) {
        console.log(e)
    }

})





//const dbURL = 'mongodb+srv://minatoali:aezakmi@expressdb.g4lgr7o.mongodb.net/?retryWrites=true&w=majority'
//mongos.connect(dbURL).then((result)=>console.log(result))


const apiKey = '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'



app.get("/1",(req, res)=>{
    res.render('1.ejs',{name:"Ali"})
})
app.get("/2",(req, res)=>{
    res.render('2.ejs')
})

app.use((req, res)=>{
    res.send("Error")
})


app.listen(3000 ,()=>console.log("Listening ..."))