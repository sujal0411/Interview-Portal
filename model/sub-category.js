const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subcategorySchema = new Schema({
    subcategoryname: {
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


let SUBCATEGORY = mongoose.model('subcategory',subcategorySchema)
module.exports = SUBCATEGORY