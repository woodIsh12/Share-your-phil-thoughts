const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userShema = new Schema({
username:{type:String, required:true, maxLength: 100},

});

const username = mongoose.model("username", userShema);
module.exports = username;