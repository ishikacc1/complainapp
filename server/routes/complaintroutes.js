const express = require("express");
const Router = express.Router();

const {
    createproblem,
    deleteproblem,
    updateproblem,
    getproblems
} = require("../../controllers/complaintcontroller.js");

const authMiddleware = require("../../middleware/authMiddleware.js");
const multer = require("multer");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

const upload = multer({ storage: storage });

// All complaint routes require authentication
Router.post("/", authMiddleware, upload.single("Photo"), createproblem);
Router.delete("/:id", authMiddleware, deleteproblem);
Router.get("/", authMiddleware, getproblems);
Router.put("/:id", authMiddleware, updateproblem);

module.exports = Router;