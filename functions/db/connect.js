const mongoose = require('mongoose').default;
const breedSchema = require('../models/breed');
exports.connectDb = async (mongodburi) => {
    if (mongoose.connection.readyState !== mongoose.ConnectionStates.connected && mongoose.connection.readyState !== mongoose.ConnectionStates.connecting) {
        await mongoose.connect(mongodburi).then((value) => {
            console.log('Mongodb connected successfully!!');
            mongoose.model('Breed', breedSchema);
        }).catch(error => {
            console.error('Error occur while connecting', error);
        });
    }
};