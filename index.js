let express = require("express");
const { dbConnection } = require("./dbConnection");

let app = express();

app.use(express.json());

app.get("/student-read", async (req, res) => {
  let myDB = await dbConnection();
  let studentCollection = myDB.collection("student");
  let data = await studentCollection.find().toArray();
  let resObj = {
    status: 1,
    msg: "studentinf",
    data,
  };
  res.send(resObj);

  res.send("App vieW API"); //uiebvbsB
});
app.get("/student-read", async (req, res) => {
  let myDB = await dbConnection();
  let studentCollection = myDB.collection("student");
  let data = await studentCollection.find().toArray();
  let resObj = {
    status: 1,
    msg: "studentinf",
    data,
  };
  res.send(resObj);

  res.send("App vieW API");
});

app.post("/student-insert", async (req, res) => {
  let myDB = await dbConnection();
  let studentCollection = myDB.collection("student");

  // let obj={
  //   sname : req.body.name,
  //   semail: req.body.email
  // }

  let { name, email } = req.body;
  let obj = { name, email };
  let insertRes = await studentCollection.insertOne(obj);

  let resObj = {
    status: 1,
    msg: "Data insert",
    insertRes,
  };
  res.send(resObj);

  console.log(obj);
  res.send("App insert API");
});

app.listen("8000");
