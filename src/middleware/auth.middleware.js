
import jwt from 'jsonwebtoken'
import userModel from '../models/user.model.js'

 async function authMiddleware(req, res, next){

    const token = req.cookies.token || req.header.authorization?.split(" ")[1]

    if(!token){
        return res.status(401).json({message: "Unauthorized access, token is missing"})
    }

   try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
   console.log(decoded.userId)
    const user = await userModel.findById(decoded.userId)
    console.log(user)

    req.user = user
     return next()
    
   } catch (error) {
    console.error(error)
      return res.status(401).json({message: "Unauthorized access"})
   }
      
 }

 export default {authMiddleware}