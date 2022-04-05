const mongoose = require('mongoose');
const User = require('../models/users');


exports.add = function(req, res){
    let newUser = new User(req.body);

    newUser.save().then(result=>{
        //const id = result._id.toString();
        res.status(200).send(result);
    })
    .catch(error => {
        if(error.code == 11000){
            res.status(500).send("This username already exists.");
            console.log(error);
        }
    });

}

/*exports.users = function(req, res){
    Thought.aggregate([{ $sample : {size: 1}}]).exec()
    .then(result=>{
        res.status(200).send(result);
    })
    .catch(error=>{
        res.status(500).send(error);
    })
}*/