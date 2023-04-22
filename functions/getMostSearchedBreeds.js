const { default: mongoose } = require('mongoose');

const connectDb = require('./db/connect').connectDb;

exports.handler = async (request) => {
    try {
        await connectDb(process.env.MONGODB_URI);
        const Breed = mongoose.model('Breed');
        // get top 10 most search result
        const top = Number.isSafeInteger(request.queryStringParameters.top) ? Number.parseInt(request.queryStringParameters.top) : 10;
        const record = await Breed.find({}).sort({ searchCount: 'desc' }).limit(top);
        return {
            body: JSON.stringify(record),
            statusCode: 200,
            statusText: 'ok',
        };
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            statusText: 'error'
        };
    }
}