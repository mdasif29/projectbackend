const mongoose=require("mongoose")
 const schemaContent={
    username:String,
    password:String
 }
 const Content = mongoose.model("project",schemaContent)
 module.exports=Content