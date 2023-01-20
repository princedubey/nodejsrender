const mongoose = require('mongoose');
require('dotenv').config();
mongoose.set('strictQuery', true);

const connectDB = async () => {
    try {
        const response = await mongoose.connect(process.env.DB_URL);
        console.log("Connected with database");
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB;

