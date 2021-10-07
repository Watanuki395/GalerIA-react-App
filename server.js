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
const port = process.env.PORT || 5000;
app.use(cors());


app.engine(
    ".hbs",
    exphbs({
      extname: ".hbs",
    })
  );
  app.set("view engine", ".hbs");


if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.resolve(__dirname + '/client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/client/build','index.html'));
});
}

app.use("/api", require("./routes/api"));
app.use("/routes", require("./routes/routes"));


app.listen(port, (err) => { 
  if(err) return console.log(err);

  console.log(`🌏 Server is running at http://localhost:${port}`) 
});
