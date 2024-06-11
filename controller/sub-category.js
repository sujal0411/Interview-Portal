let SUBCATEGORY = require("../model/sub-category");

exports.SubcategoryAdd = async function (req, res, next) {
    try {
        req.body.userID = req.userID
        let Create = await SUBCATEGORY.create(req.body);
        res.status(201).json({
            status : "success",
            message : "Subcategory added successfully",
            data : Create
        });
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : error.message            
        });        
    }
};

exports.ViewSubcategory = async function (req, res, next) {
    try {
        let find = await SUBCATEGORY.find({userID : req.userID}).populate("userID");
        res.status(201).json({
            status : "success",
            message : "Subcategory Viewed successfully",
            data : find
        });
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : error.message            
        });        
    }
};

exports.UpdateSubcategory = async function (req, res, next) {
    try {
        let Update = await SUBCATEGORY.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(201).json({
            status : "success",
            message : "Subcategory Updated successfully",
            data : Update
        });
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : error.message            
        });        
    }
};

exports.DeleteSubcategory = async function (req, res, next) {
    try {
        await SUBCATEGORY.findByIdAndDelete(req.params.id);
        res.status(201).json({
            status : "success",
            message : "Subcategory Deleted successfully"            
        });
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : error.message            
        });        
    }
};