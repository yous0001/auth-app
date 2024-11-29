import { generateTokenAndSetCookie } from '../../Utils/generateTokenAndSetCookie.js';
import { generateVerificationToken } from '../../Utils/generateVerificationCode.js';
import { verificationEmailTemplete, welecomeEmailTemplete } from '../Services/emailTemplates.js';
import sendmailservice from '../Services/sendmail.js';
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
        
        await sendmailservice({
                    to:email,
                    subject:'verify email',
                    message:verificationEmailTemplete.replace('{{code}}',verificationToken),
                    attachments:[]
                    })
                    
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


export const verifyEmail=async (req,res)=>{
    const {code}=req.body;
    try{
        const user=await User.findOne({
            verificationToken:code,
            verificationTokenExpires:{ $gt: Date.now() }
        })
        if(!user){
            return res.status(404).json({
                success:false,
                message:"invalid or expired code"
            })
        }
        user.isVerified=true;
        user.verificationToken=null;
        user.verificationTokenExpires=null
        await user.save();

        await sendmailservice({
            to:user.email,
            subject:'verify email',
            message:welecomeEmailTemplete.replace(`[User's Name]`,user.name),
            attachments:[]
            })
        return res.status(200).json({
            success:true,
            message:"verified success"
        })
    }catch(err){

    }
}
export const login=async (req,res)=>{
    res.send("login route")
}
export const logout=async (req,res)=>{
    res.send("logout route")
}
