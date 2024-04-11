import User from "../models/user.models.js";
// import bycryptjs from 'bcryptjs';
export const signup = async(req,res,next)=>{
    
const{username,email,password} = req.body;

// const hashedPassword = bycryptjs.hashSync(password,10);

// const newUser = new User ({username,email,password : hashedPassword});
const newUser = new User ({username,email,password});
try{
    await newUser.save();
res.status(201).json({msg : "User created Succesfully"});
}
catch (error)
{
    next(error);
}
};
  