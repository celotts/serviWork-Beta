const mongoose = require('mongoose');

const URI = 'mongodb://localhost:27017/serviceWork';

mongoose.connect(URI, { useNewUrlParser: true })
    .then(db => console.log('DB is connect'))
    .catch(err => console.error(err));

module.exports = mongoose;