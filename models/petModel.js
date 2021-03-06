var mongoose = require('mongoose');

//design the two schema below and use sub docs 
//to define the relationship between posts and comments

let petSchema = new mongoose.Schema({
    name: String,
    gender : String,
    breed: String,
    color : String,
    size : String,
    age : Number ,
    mail :String , 
    img : String,
    adopted :String
});

let Pet = mongoose.model('pets', petSchema)

module.exports = Pet;
