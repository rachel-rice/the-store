const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    breed: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required:true
    }

})

module.exports = mongoose.model('Post', PostSchema)