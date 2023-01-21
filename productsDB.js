const connectDB = require("./db/connect")
const Products = require("./models/products") 
require('dotenv').config();

const productsJson = require("./products.json")

const start = async() => {

    try {
        await connectDB(process.env.DB_URL);
        await Products.deleteMany();
// send Json file data | created collection through "create" function 
        await Products.create(productsJson);
        console.log("Data updated");
    } catch (error) {
        console.log(error);
    }
}

start();