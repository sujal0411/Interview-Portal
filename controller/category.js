let CATEGORY = require("../model/category");

exports.CreateCategory = async function (req, res, next) {
    try {
        req.body.userID = req.userID
        let Create = await CATEGORY.create(req.body);
        res.status(201).json({
            status : "success",
            message : "Category created successfully",
            data : Create
        });        
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : error.message
        });        
    }
};

exports.ViewCategory = async function (req, res, next) {
    try {
        let View = await CATEGORY.find({userID : req.userID}).populate("userID");
        res.status(201).json({
            status : "success",
            message : "Category Viewed successfully",
            data : View
        });        
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : error.message
        });        
    }
};

exports.UpdateCategory = async function (req, res, next) {
    try {
        let Update = await CATEGORY.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(201).json({
            status : "success",
            message : "Category Updated successfully",
            data : Update
        });        
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : error.message
        });        
    }
};

exports.DeleteCategory = async function (req, res, next) {
    try {
        await CATEGORY.findByIdAndDelete(req.params.id);
        res.status(201).json({
            status : "success",
            message : "Category Deleted successfully"            
        });        
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : error.message
        });        
    }
};