const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const breedSchema = new Schema({
    id:{
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        require: true,
    },
    imageId: {
        type: String,
        require: true
    },
    searchCount:{
        type: Number,
        required: true
    },
});

module.exports = breedSchema;
