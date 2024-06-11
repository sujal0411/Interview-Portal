let USER = require("../model/user");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

exports.Sequre = async function (req, res, next) {
    try {
        let token = req.headers.authorization
        if (!token) {
            throw new Error("please attach a token");            
        }
        let decoded = jwt.verify(token,'DEMO');
        req.userID = decoded.id
        let check = await USER.findById(decoded.id)
        if (!check) {
            throw new Error("user not found");                        
        }
        next();
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message : error.message            
        })
        
    }
};

exports.UserCreate = async function (req, res, next) {
    try {
        req.body.password = await bcrypt.hash(req.body.password,10);
        let Create = await USER.create(req.body);
        res.status(201).json({
            status: 'success',
            message : "user created successfully",
            data : Create
        })
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message : error.message            
        })
        
    }
};

exports.UserLogin = async function (req, res, next) {
    try {
        let Check = await USER.findOne({username : req.body.username});
        if (!Check) {
            throw new Error("User not found");            
        }
        let PassVerify = await bcrypt.compare(req.body.password, Check.password);
        if (!PassVerify) {
            throw new Error("Password invalid");            
        }

        var token = jwt.sign({ id: Check._id }, 'DEMO');

        res.status(201).json({
            status: 'success',
            message : "user Login successfully",
            data : Check,
            token
        })
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message : error.message            
        })
        
    }
};

exports.ViewUser = async function (req, res, next) {
    try {
        let Find = await USER.find()        
        res.status(201).json({
            status: 'success',
            message : "user Viewed successfully",
            data : Find
        })
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message : error.message            
        })
        
    }
};

exports.UpdateUser = async function (req, res, next) {
    try {
        req.body.password = await bcrypt.hash(req.body.password,10);
        let Update = await USER.findByIdAndUpdate(req.params.id,req.body,{new:true});        
        res.status(201).json({
            status: 'success',
            message : "user updated successfully",
            data : Update
        })
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message : error.message            
        })
        
    }
};