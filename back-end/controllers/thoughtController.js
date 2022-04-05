const mongoose = require('mongoose');
const Thought = require('../models/thoughts');


exports.add = function(req, res){
    let newThought = new Thought(req.body);

    newThought.save().then(result=>{
        //const id = result._id.toString();
        res.status(200).send(result);
    })

}

exports.thoughts = function(req, res){
    Thought.aggregate([{ $sample : {size: 1}}]).exec()
    .then(result=>{
        res.status(200).send(result);
    })
    .catch(error=>{
        res.status(500).send(error);
    })
}