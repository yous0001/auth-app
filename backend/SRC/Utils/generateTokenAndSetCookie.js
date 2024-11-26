import jwt from "jsonwebtoken"


export const generateTokenAndSetCookie=(res,userID)=>{
    const token=jwt.sign({userID},process.env.JWT_SECRET,{
        expiresIn:"7d"
    })
    res.cookies("token",token,{
        httpOnly:true,//to prevent xss
        secure:process.env.NODE_ENV==="production",//true=>https false=>http
        sameSite:"strict", //prevent csrf
        maxAge:7*24*60*60*1000,//7days

    })
    return token
}