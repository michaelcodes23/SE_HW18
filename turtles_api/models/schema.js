const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const turtleSchema = new mongoose.Schema({
    name: {type: String},
    role: {type: String}
})

const Turtle = mongoose.model('turtle', turtleSchema)

module.exports = Turtle;