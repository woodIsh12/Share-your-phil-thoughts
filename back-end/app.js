const express = require("express");
const app = express();
const cors = require('cors')
const connection = require("./db/connection.js");
app.use(cors());
app.use(express.json());



connection.on("open", ()=>{
    console.log("connected!!");
    const server = app.listen(8080,()=>console.log('listening'));
});