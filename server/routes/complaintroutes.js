const express = require("express");
const Router = express.Router();

const {
    createproblem,
    deleteproblem,
    updateproblem,
    getproblems
} = require("../../controllers/complaintcontroller.js");

Router.post("/", createproblem);
Router.delete("/:id", deleteproblem);
Router.get("/", getproblems);
Router.put("/:id", updateproblem);

module.exports = Router;




/** 
const authMiddleware = require("../../middleware/authMiddleware.js");
const { validateExpense } = require("../../middleware/expenseValidation.js");
const {createExpense , getExpenses, deleteExpense,updateExpense} = require("../../controllers/expensecontroller.js");
Router.post("/", authMiddleware, validateExpense, createExpense);

Router.get("/", authMiddleware, getExpenses);

Router.delete("/:id", authMiddleware, deleteExpense);

Router.put("/:id", authMiddleware, validateExpense, updateExpense);
*/