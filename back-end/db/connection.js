const mongoose = require("mongoose");
let mongoDB = `mongodb+srv://londono19:zLDODYDSM2ToFbnA
@cluster0.tc11k.mongodb.net/sharetho?retryWrites=true&w=majority`;


mongoose.connect(mongoDB);

module.exports = mongoose.connection;