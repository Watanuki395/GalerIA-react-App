const express = require('express') ;
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config() 
const { response } = require('express');
var exphbs = require("express-handlebars");
const path = require('path')

const app = express(); 
var router = express.Router();
const port = process.env.PORT || 5000;

app.engine(
    ".hbs",
    exphbs({
      extname: ".hbs",
    })
  );
  app.set("view engine", ".hbs");

// for parsing json
app.use(
    bodyParser.json({
      limit: "20mb",
    })
  );
  // parse application/x-www-form-urlencoded
  app.use(
    bodyParser.urlencoded({
      extended: false,
      limit: "20mb",
    })
  );
app.use(cors());
app.use('/',router);
//app.get('/', (req, res) => { res.status(200).send('Server is working.') }); 

if (process.env.NODE_ENV === "production") {
  app.use(express.static("app/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "app", "build", "index.html"));
  });
}

app.listen(port, (err) => { 
  if(err) return console.log(err);

  console.log(`🌏 Server is running at http://localhost:${port}`) 
});



app.get("/", (req, res) => {
    return res.json({message: "Chatbot en linea 🤖🤖🤖" });
  });

app.use("/api", require("./routes/api"));
app.use("/routes", require("./routes/routes"));


