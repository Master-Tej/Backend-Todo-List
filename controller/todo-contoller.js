const Todo = require("../model/todo-model");

const createTodoList = async (req,res) => {
    try{
        const {task, status, deadline} = req.body;
        const data = await Todo.create({task,status,deadline});
        return res.json({message:"Task Added"});
    }catch(error){
        return res.json({message: "Error Adding Task "});
    }
}
const updateTodoById = async (req,res) => {
    try{
        const _id = req.params.id;
        if(_id){
            const {task, status, deadline} = req.body;
            const data = await Todo.findByIdAndUpdate({_id}, {task, status, deadline});
            return res.json({message: "Task Updated"});
        }else{
            return res.json({message: "Error Updating Task "});
        }
    }catch(error){
        return res.json({message: "Error Updating Task "});
    }
}
const getTodoList = async (req,res) => {
    try{
        const data = await Todo.find();
        return res.json(data);
    }catch(error){
        console.log(error);
    }
}

const deleteTodoById = async (req,res) => {
    try{
        const _id = req.params.id;
        if(_id){
            await Todo.findByIdAndDelete({_id});
            return res.json({message: "Removed Successfully"});
        }else{
            return res.json({message: "Error While Deleting"});
        }
       
    }catch(error){
        console.log(error);
    }
}
module.exports = {
    createTodoList,
    getTodoList,
    deleteTodoById,
    updateTodoById
}