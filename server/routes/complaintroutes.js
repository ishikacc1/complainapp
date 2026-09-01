const express = require("express");
const Router = express.Router();

const {
    createproblem,
    deleteproblem,
    updateproblem,
    getproblems
} = require("../../controllers/complaintcontroller.js");

const authMiddleware = require("../../middleware/authMiddleware.js");

// All complaint routes require authentication
Router.post("/", authMiddleware, createproblem);
Router.delete("/:id", authMiddleware, deleteproblem);
Router.get("/", authMiddleware, getproblems);
Router.put("/:id", authMiddleware, updateproblem);

module.exports = Router;