const {Schema, model} = require('mongoose');
var todoSchema = new Schema({
    task: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    deadline: {
        type: Date,
    },
});

module.exports = model('Todo', todoSchema);