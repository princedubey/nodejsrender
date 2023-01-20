const getAllProducts = async(req, res) =>{
    res.status(200).json({msg: "Hii i am get all products"});
};

const getAllProductsTesting = async(req, res) =>{
    res.status(200).json({msg: "Hii i am get all products Testing"});
};

module.exports = {getAllProducts, getAllProductsTesting}