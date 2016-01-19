var mongoose                = require("mongoose"),
    passportLocalMongoose   = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    username: String,
    password: String
});
UserSchema.methods.validPassword = function( pwd ) {
    return ( this.password === pwd );
};

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);