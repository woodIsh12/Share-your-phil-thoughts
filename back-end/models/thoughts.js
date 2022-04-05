const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const thoughtShema = new Schema({
title:{type:String, required:true, maxLength: 100},
content:{type:String, required:true},
date:{type:Date, default: Date.now, required:true},
user:{type:String, required:true},
quote:{type:String},
authorOfQuote:{type:String, maxlength:100}

});

const thought = mongoose.model("thought", thoughtShema);
module.exports = thought;