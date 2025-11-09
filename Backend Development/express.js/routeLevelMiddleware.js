let express=require("express");
require("dotenv").config();
const { checkToken } = require("./checkTokenMiddleware");

let app=express()

// console.log(process.env.MYToken)

app.use(express.json())
let myToken="12345";
let myPass="12345";



app.get("/",(req,res)=>{
    res.send({status:1,msg:"Home Page API"})
})

app.get("/news", checkToken,(req,res)=>{
    res.send({status:1,msg:"News API"})
})

/*Routing and route params*/
app.get("/news/:id", (req,res)=>{
    let currentId=req.params.id
    res.send("news details api using dynamic params and current id:"+currentId)
})
app.listen(process.env.PORT || 5000)





