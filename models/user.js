var mongoose = require('./dbconn');

var User = mongoose.model('user', {
    user: String,
    email: String,
    name: String,
    mobile: String
});


module.exports = User;