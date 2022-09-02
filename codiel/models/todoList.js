const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({

    discription: {
        type: String,
        required: true
    },
    duedate:{
        type:Date,
        required:true
    },
    category:{
        type:String,
        required:true
    }

})


const TodoList = mongoose.model('TodoList', contactSchema);

module.exports = TodoList;