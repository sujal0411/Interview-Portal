const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const qaSchema = new Schema({
    question: {
        type: String,      
        required: true
    },
    answer: {
        type: String,
        required: true
    },
    userID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    }  
});


let QA = mongoose.model('qa',qaSchema)
module.exports = QA