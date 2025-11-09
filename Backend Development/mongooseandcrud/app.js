let express=require('express');
let mongoose=require('mongoose');
const enquiryRoutes = require('./App/routes/web/enquiryRoutes');
// const { enquiryInsert, enquiryList, enquiryDelete, enquiryUpdate } = require('./App/controllers/web/userEnquiryController.js');
require('dotenv').config();

//connect to mongodb
let app=express();

app.use(express.json());
// app.post('/api/enquiry-insert', enquiryInsert)
// app.get("/api/enquiry-list", enquiryList)
// app.delete("/api/enquiry-delete/:id", enquiryDelete)
// app.put("/api/enquiry-update/:id", enquiryUpdate)
app.use("/web/api/enquiry",enquiryRoutes)

mongoose.connect(process.env.DBURL).then(()=>{
    console.log("connected to mongoDB");
    app.listen(process.env.PORT,()=>{
        console.log("server is running on port "+process.env.PORT);
    })
})