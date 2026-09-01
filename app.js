const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const complaintsroutes = require("./server/routes/complaintroutes");
const authroutes = require("./server/routes/authroutes");

const app = express();
app.use(express.static("public"));
app.use("/api/complaints",complaintsroutes);
app.use("/api/auth",authroutes);

const PORT = 8000;
app.use(express.static("public"));
mongoose                     /// forgot 
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
    