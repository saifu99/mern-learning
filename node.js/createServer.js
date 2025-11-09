// const http = require("http");

// const server = http.createServer(function (req, res) {
//   res.end("hello world");
// });
// server.listen(4000);



const http = require("http");

const server = http.createServer(function (req, res) {
    if(req.url=="/news"){
        let obj={
            status:1,
            data:[
                {
                    newsTitle:'hey',
                    newsDes:"hello"
                },
                                {
                    newsTitle:'IIP',
                    newsDes:"IIP hello"
                }
            ]
        }
        res.end(JSON.stringify(obj))
    }
    if(req.url=="/about"){

    }
        if(req.url=="/course"){
        
    }
        if(req.url=="/"){
        res.end("Hello world from nodemon");
    }
});
server.listen(8000); 
