const express = require("express");
const Router = express.Router();
const {getTodoList, createTodoList, deleteTodoById, updateTodoById} = require("../controller/todo-contoller");
Router.route('/').get(getTodoList).post(createTodoList);
Router.route('/:id').delete(deleteTodoById);
Router.route('/:id').patch(updateTodoById);
module.exports = Router;