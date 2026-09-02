const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const complaintsroutes = require("./server/routes/complaintroutes");
const authroutes = require("./server/routes/authroutes");

const app = express();

// Middleware - MUST be before routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/uploads", express.static("public/uploads"));

// Routes
app.use("/api/complaints",complaintsroutes);
app.use("/api/auth",authroutes);

const PORT = 8000;
mongoose 
    .connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("mongo connected");

        app.listen(PORT, ()=>{
            console.log(`app is running on ${PORT}`);
        });
    })
    .catch((error) =>{
        console.log("mongo connection error", error );
    });
    