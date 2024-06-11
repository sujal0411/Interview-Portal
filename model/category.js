const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    categoryname: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["on", " off"],
        default: "on"
    },
    userID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    }
});


let CATEGORY = mongoose.model('Category',categorySchema)
module.exports = CATEGORY