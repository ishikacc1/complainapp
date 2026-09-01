const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    try {
        // Get token from Authorization header
        const token = req.headers.authorization?.split(" ")[1] || req.headers.authorization;

        if (!token) {
            return res.status(401).json({
                message: "Token not provided"
            });
        }

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();

    } catch (error) {
        console.log(error);
        res.status(401).json({
            message: "Invalid or expired token"
        });
    }
};

module.exports = authMiddleware;
