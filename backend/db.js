const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://bsainadh03:iNotebook@cluster03.0s3fa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster03";

const connectToMongo = () => {
    mongoose.connect(mongoURI);
};

module.exports = connectToMongo;