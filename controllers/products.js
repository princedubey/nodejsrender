const Product = require("../models/products")

const getAllProducts = async(req, res) =>{

    // req.query - used to filter the data
    const {company, name, sort, select} = req.query;
    const queryObject = {};

    if(company){
        queryObject.company = company;
        console.log(queryObject)
    }
    
    // data search by name
    if(name){
        queryObject.name= {$regex: name, $options: "i"};
    }

    let apiData = Product.find(queryObject);

    // sorting the data
    if(sort){
        // let sortFix = sort.replace(",", " ")
        let sortFix = sort.split(",").join(" ");
        apiData = apiData.sort(sortFix);
    }

    // display only selected information
    if(select){
        let selectFix = select.split(",").join(" ");
        apiData = apiData.select(selectFix)
    }

    // pagination concept
    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 3;
    let skip = (page-1) * limit;

    apiData = apiData.skip(skip).limit(limit);

    const myData = await apiData;
    res.status(200).json({myData});
};

const getAllProductsTesting = async(req, res) =>{
    const myData = await Product.find(req.query).sort("-name")
    res.status(200).json({myData});
};

module.exports = {getAllProducts, getAllProductsTesting}