//This file is used to connect to the databse and start the server

// Importing necessary modules
// Import Express module
const express = require("express"); 
// Import custom app module
const app = require("./src/app"); 
// Import Mongoose module
const mongoose = require("mongoose"); 
// Setting the port number
const port = process.env.port || 3000;


// Middleware to parse JSON and URL-encoded bodies
// Parse JSON bodies
app.use(express.json());
// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: false })); 


// Connecting to the database
const DATABASE_URL ="mongodb+srv://newproject:new@cluster0.vcrrudg.mongodb.net/youtubesubscribers?retryWrites=true&w=majority";
mongoose.connect(DATABASE_URL);

const dataBase = mongoose.connection;
// Handling database connection errors
dataBase.on("error", (err) => console.log(err)); 
// Logging in successful database connection
dataBase.once("open", () => console.log("connected to database")); 


// Start the server
app.listen(port, () => console.log(`App listening on port ${port}!`)); // Logging the server start and listening on the specified port
