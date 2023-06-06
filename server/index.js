const express = require('express')
const PORT = process.env.PORT

const mongoose = require('mongoose')

const db = async () => {
    try{
        const uri = 'mongodb+srv://nkwetimangem9:Fgbw7DGZj2beyNAV@cluster0.w6d77xl.mongodb.net/?retryWrites=true&w=majority'
        await mongoose.connect(uri, {
            useNewUrlparser: true,
            useUnifiedTopology: true
        })

    }catch(err){
        console.log(err)
    }
}

db()
const app = express()


    app. get("/api",(req, res)=>{
        res.json({ })
    })

app.listen(PORT, () =>{console.log("server started on port 5000")})   

mongoose.connection.once('open', ()  => {
    console.log('mongodb connected')
})

mongoose.connection.on('error', (err) => {
    console.log('error')
})