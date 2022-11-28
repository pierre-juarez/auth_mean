const mongoose = require('mongoose');
// FIXME The env is not read, and it generates an error in the connection
const MONGODB_URI = 'mongodb+srv://userMongoDB:userTestMongoDB@cluster0.qpbcvh5.mongodb.net/?retryWrites=true&w=majority'; // URL connection
console.log("🚀 ~ file: database.js ~ line 5 ~ MONGODB_URI", MONGODB_URI)

mongoose.connect(MONGODB_URI,{
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(db => console.log(' MongoDB is conected to',db.connection.host))
  .catch(err => console.log('Error',err));