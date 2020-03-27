// import mongoose from 'mongoose';
const mongoose = require('mongoose')
const dbUsername = "mongoreader";
const dbpassword = "@DsFk6T!6mzWZKw";
const dbName = "heroku_188x7kc9";
const dbConnectUrl = `mongodb://${dbUsername}:${dbpassword}@ds251819.mlab.com:51819/${dbName}?retryWrites=false&gssapiServiceName=mongodb`;
console.log(mongoose)
mongoose.connect(dbConnectUrl, {useNewUrlParser: true});

export default mongoose.connection;


