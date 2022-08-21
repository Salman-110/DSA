// const http = require('http')

// http.createServer((req,res)=>{
//     res.writeHead(200,{'content-type':'application\json'})
//     res.write(JSON.stringify({name:"amit vish" , age:21}))
//     res.end()
// }).listen(5656)
const express = require("express")
const mongoose = require("mongoose")
const app = express()
const Schema = mongoose.Schema
mongoose.connect('mongodb+srv://salman-110:Salman110@cluster0.qfvxy.mongodb.net/group43dataBase')
.then(() => console.log("MongoDB Is Connected"))
.catch(err => console.log(err));


app.use(express.json())
var thingSchema = new Schema({}, { strict: false });
let model = mongoose.model("user",thingSchema)
app.post("/home", async(req,res)=>{
    let data = req.body
   const data1  = await model.create(data)
    res.send("<h1>hello world</h1>",data1)
})
app.listen(5757)