import { generateTokenAndSetCookie } from '../../Utils/generateTokenAndSetCookie.js';
import { generateVerificationToken } from '../../Utils/generateVerificationCode.js';
import { resetPasswordRequestTemplete, resetPasswordSuccessTemplete, verificationEmailTemplete, welecomeEmailTemplete } from '../Services/emailTemplates.js';
import sendmailservice from '../Services/sendmail.js';
import User from './../../../DB/models/User.model.js';
import bcrypt from "bcryptjs";
import crypto from "crypto";

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
        return res.status(500).json({success:false,message:err.message})
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
        return res.status(500).json({success:false,message:err.message})
    }
}
export const login=async (req,res)=>{
    const {email,password}=req.body;
    try{
    if(!email||!password){
        return res.status(400).json({success:false,message:"please fill all data fields"})
    }
    const user=await User.findOne({email,isVerified:true})
    if(!user){
        return res.status(400).json({
            success:false,
            message:"invalid login credintials"
        })
    }
    const isPasswordCorrect=await bcrypt.compare(password,user.password)
    if(!isPasswordCorrect){
        return res.status(400).json({
            success:false,
            message:"invalid login credintials"
        })
    }
    generateTokenAndSetCookie(res,user._id);
    user.lastLogin=new Date();
    await user.save();
    return res.status(200).json({
        success:true,
        message:"login success",
        user:{
            ...user._doc,
            password:null
        }
    })
    }catch(err){
        return res.status(500).json({success:false,message:err.message})
    }
    

}
export const logout=async (req,res)=>{
    res.clearCookie("token")
    res.status(200).json({message:"log out success"})
}
export const forgetPassword=async (req,res)=>{
    const {email}=req.body;
    try{
        if(!email){
            return res.status(400).json({success:false,message:"please provide email"})
        }
        const user=await User.findOne({email})
        if(!user){
            return res.status(404).json({
                success:false,
                message:"user not found"
            })
        }
        const resetToken=crypto.randomBytes(20).toString('hex');
        user.resetPasswordToken=resetToken;
        user.resetPasswordExpires=Date.now() + (60*60*1000) //1 hours
        await user.save();
        await sendmailservice({
            to:user.email,
            subject:'reset password',
            message:resetPasswordRequestTemplete.replace(`{{resetLink}}`,`${process.env.LOCAL_URL}/resetpassword/${resetToken}`),
            attachments:[]
            })
            return res.status(200).json({success:true,message:"reset password link sent successfully"})
    }catch(err){
        return res.status(500).json({success:false,message:err.message})
    }
}

export const resetPassword=async (req,res)=>{
    const {token}=req.params;
    const {password}=req.body;
    try{
        if(!password){
            return res.status(400).json({success:false,message:"please provide password"})
        }
        const user=await User.findOne({resetPasswordToken:token,resetPasswordExpires:{ $gt: Date.now() }})
        if(!user){
            return res.status(404).json({
                success:false,
                message:"invalid or expired token"
            })
        }
        const hashedPassword=await bcrypt.hash(password,+process.env.SALT_ROUNDS);
        user.password=hashedPassword;
        user.resetPasswordToken=null;
        user.resetPasswordExpires=null;
        await user.save();
        await sendmailservice({
            to:user.email,
            subject:'password reset success',
            message:resetPasswordSuccessTemplete.replace("[User's Name]",user.name),
            attachments:[]
            })
        return res.status(200).json({success:true,message:"reset password success"})
    }catch(err){
        return res.status(500).json({success:false,message:err.message})    
    }
}