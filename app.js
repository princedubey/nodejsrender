const express = require('express')
const app = express()
const products_routs = require("./routes/products")
const connectDB = require("./db/connect")
const PORT = process.env.PORT || 5000;


app.get('/', (req, res) => {
    res.send('Hello World!')
})

// middleware | set routes
app.use("/api/products", products_routs);

const start = async () =>{
    try {
        await app.listen(PORT, () => {
            console.log(`app listening on port ${PORT}!`)
        })
        await connectDB();
    } catch (error) {
        console.log(error)
    }
}

start();