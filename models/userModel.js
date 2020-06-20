var mongoose = require('../config/dbConnect');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: String,
    password: String,
}, {
    collection: 'users'
});

var UserModel = mongoose.model('users', UserSchema);
UserModel.create({
    username: 'Thuan',
    password: 'thuan1234',
}).then(function(data) {
    console.log(data);
})
module.exports = UserModel;