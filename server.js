const express = require('express') ;
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config() 
const { response } = require('express');
var exphbs = require("express-handlebars");
const path = require('path');
const helmet = require('helmet') // creates headers that protect from attacks (security)

const app = express(); 
var router = express.Router();
const port = process.env.PORT || 8080;


// --> Add this
// ** MIDDLEWARE ** //
const whitelist = ['http://localhost:3000', 'http://localhost:8080', 'https://galleria-spa-dev.herokuapp.com/']
const corsOptions = {
  origin: function (origin, callback) {
    console.log("** Origin of request " + origin)
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      console.log("Origin acceptable")
      callback(null, true)
    } else {
      console.log("Origin rejected")
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(helmet())
// --> Add this
app.use(cors(corsOptions))



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

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
// Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build/index.html'));
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


