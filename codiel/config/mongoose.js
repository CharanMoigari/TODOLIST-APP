
// require the library
const mongoose=require("mongoose");

// connect to the database
mongoose.connect("mongodb://localhost/Todo_list_db");

// aquire the connection (to check if it is successful)
const db=mongoose.connection;

//error
db.on("error",console.error.bind(console,"error in conecting"));

db.once("open",function(){

    // up and running then print the message
    console.log("mangoose succesfully connected");
}
);
