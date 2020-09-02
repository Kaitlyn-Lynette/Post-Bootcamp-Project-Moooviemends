const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const dbConnection = require('./config/middleware/db_connection');
const mongoose = require("mongoose");
const MongoStore = require('connect-mongo')(session);
const routes = require("./routes");

const PORT = process.env.PORT || 3001;

const app = express();

// Define middleware here

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

app
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())
  .use(cors())
  // .use({mongooseConnection: dbConnection})
  .use(
    session({
      store: new MongoStore({ mongooseConnection: dbConnection }),
    })
  )

// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/moooviemends",{
//   useNewUrlParser: true,
//   useUnifiedTopology: true 
// })
  

 
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// app.use(express.static("public"));


app.get('/service-worker.js', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'service-worker.js'));
});
// Add routes, both API and view
app.use(routes);





// // Use apiRoutes
// app.use("/api", apiRoutes);

// Send every request to the React app
// Define any API routes before this runs
// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
