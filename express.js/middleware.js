let express=require("express")

let app=express()
app.use(express.json())
let myToken="12345";
let myPass="12345";

let checkToken=(req,res,next)=>{
    console.log(req.query.token)
    if(req.query.token=="" || req.query.token==undefined){
        return res.send(
            {
                status:0,
                msg:"please fill the token"
            }
        )
    }
        if(req.query.token!=myToken){
        return res.send(
            {
                status:0,
                msg:"please fill the correct token"
            }
        )
    }
    next();
}
app.use(checkToken) //middleware

app.use((req,res,next)=>{
        if(req.query.pass=="" || req.query.pass==undefined){
        return res.send(
            {
                status:0,
                msg:"please fill the password"
            }
        )
    }
        if(req.query.pass!=myPass){
        return res.send(
            {
                status:0,
                msg:"please fill the correct password"
            }
        )
    }
    next(); //second middleware myPass
})



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
app.listen("8000")