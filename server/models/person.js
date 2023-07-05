const mongoose = require('mongoose')
const schema  = mongoose.Schema

const personSchema = new schema({
    id          : {type:String , required:true},
    first_name  : {type:String , required:true},
    last_name   : {type:String , required:true},
    adress      : {type:String , required:true},
}   ,   {   timestamps:true }   )

const person = mongoose.model('Person',personSchema)

module.exports=person