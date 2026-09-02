const problem = require("../model/db");

const getproblems = async(req,res)=>{   
try{
    const problems = await problem.find({  
        user: req.user.userId    
    });
    res.status(200).json(problems)
}catch(error){
    console.log(error);
    res.status(500).json({
        message: "error getting problem"
    });
}

};
const createproblem = async(req, res)=>{
try{
    const Problem = new problem({
    Title: req.body.Title,
    Description: req.body.Description,
    Category: req.body.Category,
    Location: req.body.Location,
    Photo: req.file.filename,
    Priority: req.body.Priority,
    user: req.user.userId
});
   
    const savedproblem = await Problem.save();
    res.status(201).json({
        message: "problem submitted",
        Problem: savedproblem
    })
} catch(error){
    console.log(error);
    res.status(500).json({
        message: "error submitting"
    });
}
};
const  updateproblem = async(req, res)=>{
    try{
        const Problem = await problem.findOneAndUpdate(
            {
                _id: req.params.id,
                user: req.user.userId
            },
            {  
            Title: req.body.Title,
            Description: req.body.Description,
            Category: req.body.Category,
            Location: req.body.Location,
            Photo: req.file.filename,
            Priority: req.body.Priority,
            user: req.user.userId
            },
            {
                new: true
            }
    );
    if(!Problem){
        return res.status(404).json({
            message: "problem not found"
        });
    }
    res.status(200).json({
    
        message: "problem updated",
        Problem: Problem
    });
    } catch(error){
        console.log(error)
        res.status(500).json({
            message: "error"
        });
    }
   
}
const deleteproblem = async(req ,res)=>{
    try{
        const Problem = await problem.findOneAndDelete({
            _id: req.params.id,
            user: req.user.userId
        });
        if(!Problem){
            return res.status(404).json({
                message: "problem not found"
            });
        }
        res.status(200).json({
            message: "expense deleted",
            Problem: Problem
        });
    } catch(error){
        console.log(error);
        res.status(500).json({
        message: "error "
        });
    }
};
module.exports = {
    createproblem,
    deleteproblem,
    updateproblem,
    getproblems
};
