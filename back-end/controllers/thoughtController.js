const mongoose = require('mongoose');
const Thought = require('../models/thoughts');

//don't forget to to send the status codes
exports.add = function(req, res){
    let newThought = new Thought(req.body);

    newThought.save()
    .then(result=>{
        //const id = result._id.toString();
        res.status(200).send(result);
    }).catch(error=>{
        res.send(error);
    })

}
exports.getThought = function(req, res){
    Thought.findById(req.params.id).exec()
    .then(result =>{
        res.send(result);
    }).catch(error =>{
        console.log(error);
        res.send(error);
    })

}

exports.modify = function(req, res){

    Thought.findById(req.params.id).exec()
    .then(result=>{
        if(result.username == req.body.username){
            Thought.findByIdAndUpdate(req.params.id, {$set: req.body}, 
                {new: true}).exec()
                .then(result =>{
                    res.send(result);
                }).catch(error => res.send(error));
        }
        else{
            res.send("You can only update your thought.")
        }
    }).catch(error=>{
        res.send("This thought doens't exist.")
    })

}

exports.delete = function(req, res){

    Thought.findById(req.params.id).exec()
    .then(result=>{
        if(result.username == req.body.username){
            Thought.findByIdAndDelete(req.params.id).exec()
            .then(result =>{
                res.send("Thought has been deleted");
            }).catch(error=> res.send(error));
        }
        else{
            res.send("You can only delete your thought.")
        }
    }).catch(error=>{
        res.send("This thought doens't exist.")
    })

}

exports.thoughts = function(req, res){
    Thought.find().exec()
    .then(result=>{
        res.status(200).send(result);
    })
    .catch(error=>{
        res.status(500).send(error);
    })
}