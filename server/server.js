const express = require('express') ;
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config() 
const { response } = require('express');
var exphbs = require("express-handlebars");

const app = express(); 
var router = express.Router();
const port = process.env.PORT || 5001;

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
app.listen(port, () => { console.log(`🌏 Server is running at http://localhost:${port}`) });
app.use(express.static(__dirname+'/public'));


app.get("/", (req, res) => {
    return res.send("Chatbot en linea 🤖🤖🤖");
  });

app.use("/api", require("./routes/api"));
app.use("/routes", require("./routes/routes"));
