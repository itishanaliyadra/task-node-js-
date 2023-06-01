const jwt = require('jsonwebtoken')
const authmodels = require('../models/authmodels');
const secret = '8x/A?D(G+KbPeShVmYq3t6v9y$B&E)H@McQfTjWnZr4u7x!z%C*F-JaNdRgUkXp2s5v8y/B?D(G+KbPeShVmYq3t6w9z$C&F)H@McQfTjWnZr4u7x!A%D*G-KaPdRgUk';

const chekauth = async (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization || !authorization.startsWith('Bearer ')) {
        return res.status(401).json({ success: false, msg: "You are not authorized" });
    }
    const token = authorization.split(' ')[1];
    try {
        let istoken = await authmodels.findOne({ token });

        if (!istoken) {
            return res.status(401).json({ success: false, msg: "Unauthorized" });
        }
        
        istoken= istoken.toJSON()
        
        const decoded = jwt.decode(token, secret);
    
        req.user = {
            id: decoded.id,
            email: decoded.email
        };
        return next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({ success: false, msg: "Token invalid" });
    }
};

module.exports = chekauth;
