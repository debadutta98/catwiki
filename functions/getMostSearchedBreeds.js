const connectDb = require("./db/connect").connectDb;

exports.handler = async (request) => {
  try {
    const mongoose = await connectDb(process.env.MONGODB_URI);
    if (mongoose) {
      const Breed = mongoose.model("Breed");
      // get top 10 most search result
      const top = Number.isSafeInteger(+request.queryStringParameters.top)
        ? Number.parseInt(request.queryStringParameters.top)
        : 10;
      const record = await Breed.find({})
        .sort({ searchCount: "desc" })
        .limit(top);
      return {
        body: JSON.stringify(record),
        statusCode: 200,
        statusText: "ok",
      };
    } else {
      return {
        statusCode: 502,
      };
    }
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      statusText: "error",
    };
  }
};
