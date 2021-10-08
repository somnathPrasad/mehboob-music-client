require('dotenv').config()
const express = require("express")
const ejs = require("ejs")
const port = process.env.PORT || 3000
const app = express()
const mongoose = require("mongoose")
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.set("view engine", "ejs")
app.use(express.static("public"))
mongoose.connect(process.env.MONGO_URI)

const youtubeSchema = new mongoose.Schema({
    id:String
})
const Youtube = new mongoose.model("youtubeSchema",youtubeSchema)

app.get("/",(req,res)=>{
    Youtube.find({},function(err,data){
        res.render("home",{videos:data})
    })
})

app.get("/upload/:password",auth,(req,res)=>{
    res.render("upload",{message:""})
    console.log(req.params.password)
})



app.post("/upload/youtube",(req,res)=>{
    var iframe = req.body.iframe;
    if(iframe.startsWith("https://www.youtube.com/watch?v=")){
        var videoId = iframe.split("https://www.youtube.com/watch?v=")[1]
        Youtube.create({id:videoId})
        res.render("upload",{message:"👏👏successfully uploaded👏👏"})
    }else if(iframe.startsWith("https://youtu.be/")){
        var videoId = iframe.split("https://youtu.be/")[1]
        Youtube.create({id:videoId})
        res.render("upload",{message:"👏👏successfully uploaded👏👏"})
    }else{
        res.render("upload",{message:"link broken!"})
    }
    res.end
})

function auth(req,res,next){
    var password = req.params.password;
    if(password === process.env.ADMIN_PASSWORD){
        next()
    }else{
        res.send("not authorized");
    }
}

app.listen(port,()=>{
    console.log(`Mehboob music official listining on port http://localhost:${port}`)
})
