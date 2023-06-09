const express=require("express")
const app=express()
const cors=require("cors")
const bodyParser=require("body-parser")
const port=process.env.PORT|| 5000;
const mongoose=require("mongoose")
const Content=require("./schema")
console.log(Content)
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(bodyParser.json())

app.use(cors())

mongoose.connect("mongodb+srv://mdasif:indiaone@cluster0.5v3bhj8.mongodb.net/firstdp?retryWrites=true&w=majority")
        .then(()=>{
            console.log("mongosedb is connected succesfully")
        })
        // .catch((err)=>{
        //     console.log(err)
        // })
// app.get("/",(req,res)=>{
//     res.send("APR is working")
// })
app.get("/users",async(req,res)=>{
    await Content.find()
    .then(found=>res.json(found))
})
app.post("/store",(req,res)=>{
    const {username,password}=req.body
    const newData=new Content({
        username,password
    })
    newData.save()
})
app.listen(5000,()=>console.log("server started successfully"))