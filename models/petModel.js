var mongoose = require('mongoose');

//design the two schema below and use sub docs 
//to define the relationship between posts and comments

let petSchema = new mongoose.Schema({
    text: String,
    comments:  []
});

let Pet = mongoose.model('pets', petSchema)

module.exports = Pet;
