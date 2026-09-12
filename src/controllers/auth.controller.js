

import userModel from '../models/user.model.js'
import jwt from 'jsonwebtoken'

  async function registerControler(req, res){
    
    const {email, name, password} = req.body;
 
    const isEmailExit = await userModel.findOneAndDelete(
        {email}
    )
    if(isEmailExit){
        return res.status(409).json({
            message: "User already register with this email"
        })
    }

    const user = await userModel.create({
        email, name, password
    })

    const token = jwt.sign(
 { id: user._id
    }, process.env.JWT_SECRET, {expiresIn: '3d'} )

    res.cookie("token", token)

    res.status(201).json({
        message: "User was registerd successfully",
        user: {
            email: user.email,
            name: user.name,
        },
        token: token
    })


}


export default {registerControler}