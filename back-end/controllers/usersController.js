const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../models/users');
const username = require('../models/users');


exports.signIn = function(req, res){

    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashPassword = bcrypt.hashSync(req.body.password, salt);

    let newUser = new User({
        username: req.body.username,
        password: hashPassword
    });

    newUser.save().then(result=>{
        //const id = result._id.toString();
        res.status(200).send(result);
    }).catch(error => {
        if(error.code == 11000){
            res.send({alreadyExists: "This username already exists."});
        }
    });

}

exports.logIn = function(req, res){

    User.findOne({username: req.body.username}).exec()
    .then(result =>{


            const validate = bcrypt.compareSync(req.body.password, result.password);
            
            if(validate)res.send(result);
            else res.send({error: "Wrong Credentials"});
        
    })
    .catch(error => {
        res.send({error1: "Wrong Credentials", error:error})
    });

}

