var mongoose = require("mongoose");

var NewSchema = mongoose.Schema({
    title: String,
    imagedest: String,
    content: String,
    link: String
});

module.exports = mongoose.model("News", NewSchema);