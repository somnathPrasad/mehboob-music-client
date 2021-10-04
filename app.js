const express = require("express")
const ejs = require("ejs")
const port = process.env.PORT || 3000
const app = express()
const mongoose = require("mongoose")
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.set("view engine", "ejs")
app.use(express.static("public"))
mongoose.connect("mongodb+srv://admin-somnath:JqeWeqLQzFTJmXbm@cluster0.yp2b7.mongodb.net/mehboobDb?retryWrites=true&w=majority")


const youtubeSchema = new mongoose.Schema({
    id:String
})
const Youtube = new mongoose.model("youtubeSchema",youtubeSchema)

app.get("/",(req,res)=>{
    Youtube.find({},function(err,data){
        res.render("home",{videos:data})
    })
})

app.get("/upload",(req,res)=>{
    res.render("upload",{message:""})
})

app.post("/upload/youtube",(req,res)=>{
    var iframe = req.body.iframe;
    if(iframe.startsWith("https://www.youtube.com/watch?v=")){
        var videoId = iframe.split("https://www.youtube.com/watch?v=")[1]
        Youtube.create({id:videoId})
        res.render("upload",{message:"👏👏successfully uploaded👏👏"})
    }else{
        res.send("broken link!")
    }
    res.end
})

app.listen(port,()=>{
    console.log(`Mehboob music official listining on port ${port}`)
})
