const TodoList=require("../models/todoList");
module.exports.home=function(req,res){
    TodoList.find({}, function(err, todoList){
console.log("HomeController worked");
        if(err){
            console.log("error in fetching todolist from db");
            return;
        }
        return res.render('home',{
            title: "TODOLIST",
            todolist: todoList
        });  
})};