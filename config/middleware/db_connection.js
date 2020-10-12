//Connect to Mongo database
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const dotenv = require("dotenv");
dotenv.config()

//your local database url
//27017 is the default mongoDB port
// var uri = process.env.MONGODB_URI || 'mongodb://localhost/moooviemends';

var uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@moooviemends.ihnri.mongodb.net/moooviemends?retryWrites=true&w=majority` || 'mongodb://localhost/moooviemends'

mongoose.connect(uri,
  {
    useNewUrlParser: 'true',
    useUnifiedTopology: 'true',
    useCreateIndex: 'true',
    useFindAndModify: 'false',
  }
  ).then(
  () => {
    /** ready to use. The `mongoose.connect()` promise resolves to undefined. */
    console.log('Connected to Mongo');
    

  },
  err => {
    /** handle initial connection error */
    console.log('error connecting to Mongo: ');
    console.log(err);

  }
);








module.exports = mongoose.connection;