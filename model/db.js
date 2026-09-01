const express = require("express");
const mongoose = require("mongoose");

const problemSchema = new mongoose.Schema({     //forgot u have to name it schema
    Title: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    Category: {
        type: String,
        required: true
    },
    Location: {
        type: String,
        required: true
    },
    Photo: {
        type: String,
        required: true
    },
    Priority: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

});
const problem = mongoose.model("problem", problemSchema);
module.exports = problem;