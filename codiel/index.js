// require express for setting up the express server
const express=require("express");

// set up the port number
const port=4000;

app=express();
app.use("/",require("./routes/index"));

// set up the view engine
app.set("view engine","ejs");

// to use encrypted data
app.use(express.urlencoded());

// using static files
app.use(express.static("assets"));

// importing the DataBase
const db=require("./config/mongoose");

// importng the Schema For tasks
const TodoList = require("./models/todoList");

//creating tasks
app.post("/create-todolist",function(req,res){
    TodoList.create({
        discription:req.body.discription,
        duedate:req.body.duedate,

        category:req.body.category

    },function(err,newTodoList){
        if(err){
            console.log(err);}
        console.log("new task added",newTodoList);
    });
    return res.redirect("/");
});

// deleting tasks
app.get("/delete-task",function(req,res){
var id=req.query
console.log(Object.keys(id));
var count=Object.keys(id).length
for(let i=0;i<count;i++){
    console.log("Deletin task");
    TodoList.findByIdAndDelete(Object.keys(id)[i],function(err){
        if(err){
            console.log(err)
        }
    })
}
return res.redirect("/");

});
app.listen(port,function(err){
    if(err){
        
   console.log(err);
   return
    }
    console.log("succesfully  working under port:",port);

})
