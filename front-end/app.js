const express = require("express");
const app = express();
const server = app.listen(process.env.PORT || 8008, ()=>console.log("Listening"));

app.use(express.static("public"));