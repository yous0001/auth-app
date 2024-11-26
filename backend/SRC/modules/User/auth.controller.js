import { generateTokenAndSetCookie } from '../../Utils/generateTokenAndSetCookie.js';
import { generateVerificationToken } from '../../Utils/generateVerificationCode.js';
import User from './../../../DB/models/User.model.js';
import bcrypt from "bcryptjs";


export const signup=async (req,res)=>{
    const {name,email,password}=req.body;
    try{
        if(!email||!name||!password){
            return res.status(400).json({success:false,message:"please fill all data fields"})
        }
        const isUserExists=await User.findOne({email})
        if(isUserExists){
            return res.status(409).json({success:false,message:"email is already exists"})
        }
        const hashedPassword=bcrypt.hashSync(password,+process.env.SALT_ROUNDS);
        const verificationToken=generateVerificationToken()


        const newUser=await User.create({
            email,
            name,
            password:hashedPassword,
            verificationToken,
            verificationTokenExpires:Date.now() + (24*60*60*1000) // 1day (24 hours)
        })

        generateTokenAndSetCookie(res,newUser._id)
        res.status(201).json({success:true,message:"user create successfully",
            user:{
                ...newUser._doc,
                password:null
            }
        })
    }catch(err){
        return res.status(500).json({success:false,message:err})
    }
}



export const login=async (req,res)=>{
    res.send("login route")
}
export const logout=async (req,res)=>{
    res.send("logout route")
}
