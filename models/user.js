var mongoose = require('./dbconn');

var User = mongoose.model('user', {
    email: String,
    name: String,
    mobile: String
});


module.exports = User;