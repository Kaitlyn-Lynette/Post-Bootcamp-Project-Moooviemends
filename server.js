const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes')
//Mongo Connection imports
const session = require('express-session');
const dbConnection = require('./config/middleware/db_connection');
const MongoStore = require('connect-mongo')(session);
//Express server
const app = express();
const PORT = process.env.PORT || 3001;

app
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())
  .use(cors())
  // .use({mongooseConnection: dbConnection})
  .use(
    session({
      secret: 'supersecretkeythatnooneknows',
      store: new MongoStore({ mongooseConnection: dbConnection }),
      resave: false, //required
      saveUninitialized: false, //required
    })
  )
//Connecting to the routes
app.use(routes);
 
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

