const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
//env config
require('dotenv').config();
const db = require("./config/db");



//rest object
const app = express();


//database connection

db();


//middelwares
app.use(express.json());
app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));


//cors
app.use((req, res, next) => {
    req.header("Access-Control-Allow-Origin", "*");
    req.header("Access-Control-Allow-Headers", "*");
    next();
  });


  //import routes
  const questionRouter = require("./routes/Question");
const answerRouter = require("./routes/Answer");


  //routes
  app.use("/questions", questionRouter);
  app.use("/answers", answerRouter);

app.get("/", (req, res) => {
    res.send("This api is reserved for quora clone");
  });



  


//server listening
const port =process.env.PORT||8080;

app.listen(port, () => {
  console.log(`Listening on port no ${port}`);
});

