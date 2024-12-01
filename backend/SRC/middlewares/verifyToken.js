import  jwt  from 'jsonwebtoken';
const verifyToken =async(req,res,next)=>{
    const token =req.cookies.token;
    if(!token)return res.status(401).josn({success:false,message:"unauthorized - no token"});
    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        if(!decoded)return res.status(401).josn({success:false,message:"unauthorized - invalid token"});

        req.userID=decoded;
        next()
    }
    catch(err){
        return res.status(500).json({success:false,message:err.message}) 
    }
}