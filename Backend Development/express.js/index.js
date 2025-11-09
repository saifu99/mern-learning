let express=require("express")

let app=express()
app.get("/",(req,res)=>{
    res.send({status:1,msg:"Home Page API"})
})

app.get("/news",(req,res)=>{
    res.send({status:1,msg:"News API"})
})

/*Routing and route params*/
app.get("/news/:id", (req,res)=>{
    let currentId=req.params.id
    res.send("news details api using dynamic params and current id:"+currentId)
})

app.get("/products",(req,res)=>{
    res.send({status:1,msg:"Product API"})
})

app.post("/login",(req,res)=>{
    console.log(req.body) //object
    res.send({status:1,msg:"Login API", bodyData:req.body, queryData:req.query})
})
app.listen("8000")