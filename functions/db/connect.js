const mongoose = require('mongoose').default;
const breedSchema = require('../models/breed');
exports.connectDb = async (mongodburi) => {
    if (mongoose.connection.readyState !== mongoose.ConnectionStates.connected && mongoose.connection.readyState !== mongoose.ConnectionStates.connecting) {
        return await mongoose.connect(mongodburi).then((value) => {
            console.log('Mongodb connected successfully!!');
            value.model('Breed', breedSchema);
            return value;
        }).catch(error => {
            console.error('Error occur while connecting', error);
            return null;
        });
    } else {
        return mongoose.connection;
    }
};