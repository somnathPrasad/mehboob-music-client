const express = require("express")
const ejs = require("ejs")
const port = process.env.PORT || 3000
const app = express()
const mongoose = require("mongoose")
app.use(express.json())
app.set("view engine", "ejs")
app.use(express.static("public"))
// JqeWeqLQzFTJmXbm
mongoose.connect("mongodb+srv://admin-somnath:JqeWeqLQzFTJmXbm@cluster0.yp2b7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")

const adminSchema = new mongoose.Schema({
    ip:String
})

const Admin = new mongoose.model("Admin",adminSchema)

app.get("/",(req,res)=>{
    res.render("home")
})
app.get("/admin",(req,res)=>{
    Admin.findOne({ip:req.ip},function(err,result){
        if(result === null){
                Admin.create({ip:req.ip},function(err,result){
                    res.render("admin")
            })
        }else{
            res.render("admin")
        }
    })
})

app.get("/admin/youtube",function(req,res){
    
})

app.listen(port,()=>{
    console.log(`Mehboob music official listining on port ${port}`)
})
