//requires
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const colors = require("colors");
  
//instances
const app = express();

//express config
app.use(morgan("tiny"));
app.use(express.json());
app.use(   
  express.urlencoded({
    extended: true
  })
);
app.use(cors());

//express routes
app.use("/api1", require("./routes/devices.js"));
app.use("/api1", require("./routes/users.js"));

module.exports = app;

//listener
app.listen(3001, () => {
  console.log("API server listening on port 3001");
});


//Mongo connection 
const mongoUserName ="fvh";
const mongoPassword ="hidro";
const mongoHost="localhost";
const mongoPort="27017";
const mongoDatabase="fvh";


var uri = "mongodb://" + mongoUserName + ":" + mongoPassword + "@" + mongoHost + ":" + mongoPort + "/" + mongoDatabase;

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useNewUrlParser: true,
  authSource: "admin"
};


    mongoose.connect(uri, options).then(
    ()=>{
    console.log("\n");
    console.log("*******************************".green);
    console.log("✔ Mongo conectado              ".green);
    console.log("*******************************".green);
    console.log("\n");
    },

    (err)=>{

    console.log("\n");
    console.log("*******************************".red);
    console.log("✔ Error al conectar            ".red);
    console.log("*******************************".red);
    console.log("\n");
    }

); 

