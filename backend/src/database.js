const mongoose = require('mongoose');
// TODO Put in environment variable
const MONGODB_URI = ''; // URL connection

mongoose.connect(MONGODB_URI,{
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(db => console.log(' MongoDB is conected to',db.connection.host))
  .catch(err => console.log('Error',err));