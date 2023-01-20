const mongoose = require('mongoose')

const productsSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    featured: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        default: 4.9
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    company: {
        type: String,
        enum: {
            values: ["apple", "samsung", "mi", "dell"],
            message: `{VALUE} not supported`
        },
    },
});

module.exports = mongoose.model("Products", productsSchema);
       