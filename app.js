const express = require("express")
const ejs = require("ejs")
const port = process.env.PORT || 3000
const app = express()
app.use(express.json())
app.set("view engine", "ejs")
app.use(express.static("public"))

app.get("/",(req,res)=>{
    res.render("home")
})
app.get("/a",(req,res)=>{
    res.render("test")
})

app.listen(port,()=>{
    console.log(`Mehboob music official listining on port ${port}`)
})
