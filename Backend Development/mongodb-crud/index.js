let express=require("express");
const { dbConnection } = require("./dbConnection");
const { ObjectId } = require("mongodb"); 
let app=express();

app.use(express.json());
//view
app.get("/student-read", async (req,res)=>{
    const myDB=await dbConnection();
    const studentCollection=myDB.collection("students")
    const data=await studentCollection.find().toArray();
    
        res.send({
    status: 1,
    msg: "Student List",
    data
  });
});

//CREATE (Insert Data) 
app.post("/student-insert", async (req,res)=>{
    const myDB=await dbConnection();
    const studentCollection=myDB.collection("students")

    const {sName,sEmail}=req.body;

      // check if email already exists
  const existingStudent = await studentCollection.findOne({ sEmail });

  if (existingStudent) {
    return res.send({
      status: 0,
      msg: "email already exists",
    });
  }

    const insertRes= await studentCollection.insertOne({sName,sEmail});

      res.send({
    status: 1,
    msg: "Data Inserted",
    insertRes,
  });
});

//delete 
app.delete("/student-delete/:id", async(req,res)=>{
  const {id}=req.params; //{id:3}
    const myDB=await dbConnection();
    const studentCollection=myDB.collection("students")

    const deleteRes= await studentCollection.deleteOne({_id: new ObjectId(id)});

      res.send({
    status: 1,
    msg: "Data Deleted",
    deleteRes,
  });
});

//update
app.put("/student-update/:id", async(req,res)=>{
  const {id}=req.params; //where
    const myDB=await dbConnection();
    const studentCollection=myDB.collection("students")

    const {sName,sEmail}=req.body;

      // build the update object dynamically
  const updateFields = {};
  if (sName) updateFields.sName = sName;
  if (sEmail) updateFields.sEmail = sEmail;

    const updateRes = await studentCollection.updateOne({_id: new ObjectId(id)}, {$set: updateFields});

      res.send({
    status: 1,
    msg: "Data Updated",
    updateRes,
  });
});

app.listen(8000, () => console.log("Server running on port 8000"));
