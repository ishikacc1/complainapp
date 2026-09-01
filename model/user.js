
const mongoose = require("mongoose");

const userschema = new mongoose.Schema({     //forgot
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});
const user = mongoose.model("user",userschema);
module.exports = user;





/*{
  "name": "ishika",
  "email": "icdfhdu@123",
  "password": "ishika"
  {"message":"login successful","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2YTk2Yzg4YjBmMWZmMjBmMTlhNjRlZDAiLCJpYXQiOjE3ODgyNjY4MTksImV4cCI6MTc4ODI3MDQxOX0.1xpyDYijOsImxesnugWwAlaaiStu2Czpw8D9MOeS9X8"}
}*/