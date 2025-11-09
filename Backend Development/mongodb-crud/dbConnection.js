const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";  
const client = new MongoClient(url);

async function dbConnection() {
  await client.connect();
  console.log("MongoDB connected successfully");

  const db = client.db("mongoDBProject_DataBase");
  return db;
}

module.exports = { dbConnection };

