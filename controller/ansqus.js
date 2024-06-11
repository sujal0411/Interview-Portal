let QA = require("../model/ansqus");

exports.QaCreate = async function (req, res, next) {
    try {
        req.body.userID = req.userID
        let Create = await QA.create(req.body);
        res.status(201).json({
            status : "success",
            message : "Question Answer Was added successfully",
            data : Create
        });
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : error.message            
        });        
    }
};

exports.QaView = async function (req, res, next) {
    try {
        let View = await QA.find({userID : req.userID}).populate("userID");
        res.status(201).json({
            status : "success",
            message : "Question Answer Viewed successfully",
            data : View
        });
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : error.message            
        });        
    }
};

exports.QaUpdate = async function (req, res, next) {
    try {
        let Update = await QA.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(201).json({
            status : "success",
            message : "Question Answer Updated successfully",
            data : Update
        });
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : error.message            
        });        
    }
};

exports.QaDelete = async function (req, res, next) {
    try {
        await QA.findByIdAndDelete(req.params.id);
        res.status(201).json({
            status : "success",
            message : "Question Answer Deleted successfully"            
        });
    } catch (error) {
        res.status(404).json({
            status : "fail",
            message : error.message            
        });        
    }
};