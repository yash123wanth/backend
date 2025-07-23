const { MongoClient } = require("mongodb");

const dbConnectionUrl = "mongodb://127.0.0.1:27017";
const client = new MongoClient(dbConnectionUrl);

let dbConnection = async () => {
  await client.connect();
  console.log("Connected");
  let db = client.db("mydatabase");
  return db;
};

module.exports={dbConnection}