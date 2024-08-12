import jwt from 'jsonwebtoken';  
import User from '../Model/userSchema.js'; 
const protect = async (req, res, next) => {
    console.log('Authorization Header:', req.headers.authorization); // Log header
    let token;
  
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      try {
        token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select('-password');
        console.log('Decoded User:', req.user); 
        next();
      } catch (error) {
        res.status(401).json({ message: 'Not authorized, token failed' });
      }
    } else {
      res.status(401).json({ message: 'Not authorized, no token' });
    }
  };
  

const principalOnly = (req, res, next) => {
  if (req.user && req.user.role === 'Principal') {
    next();
  } else {
    res.status(403).json({ message: 'Not authorized as Principal' });
  }
};

export {protect,principalOnly}