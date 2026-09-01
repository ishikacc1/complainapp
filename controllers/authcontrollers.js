const User = require("../model/user.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res)=>{
    try{
        const {name, email, password} = req.body;
        const exisitingUser = await User.findOne({ email });
        if (exisitingUser){
            return res.status(400).json({
                message: "user already exists"
            });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            name: name,
            email: email,
            password: hashedPassword
        });
        await user.save();
        res.status(201).json({
            message: "user registered successfully"
        });
    } catch(error){
        console.log(error);
        res.status(500).json({
            message: "registration dfailed"
        });
    }
};

const login = async(req, res)=>{
    try{
        const {email, password} = req.body;
        const user = await User.findOne({ email });
        if(!user){
            return res.status(401).json({
                message: "user does not exist"
            });
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch){
            return res.status(401).json({
                message: "invalid password"
            });
        }
        const token = jwt.sign(
        {
            userId: user._id
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "1h"
        }
        );
        res.status(200).json({
            message: "login successful",
            token: token
        });
    } catch(error){
        console.log(error);
        res.status(500).json({
            message: "login unsuccessful"
        })
    }
};
module.exports = {register , login };