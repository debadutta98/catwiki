const { default: mongoose } = require('mongoose');

const connectDb = require('./db/connect').connectDb;
/**
 * 
 * @param {Request} request 
 * @returns {Response}
 */
exports.handler = async (request) => {
    try {
        await connectDb(process.env.MONGODB_URI);
        const Breed = mongoose.model('Breed');
        const body = JSON.parse(request.body);
        const isPresent = await Breed.findOne({id: body.id});
        if(isPresent && isPresent.id) {
            await Breed.updateOne({ id: body.id }, {
                searchCount: 1 + isPresent.searchCount
            });
            return {
                statusCode: 200,
                statusText: 'ok',
            }
        } else {
            await Breed.create({
                ...body,
                searchCount: 1
            })
            return {
                statusCode: 201,
                statusText: 'created',
            }
        }
    } catch (error){
        console.log(error);
        return {
            statusCode: 500,
            statusText:'error'
        };
    }
}