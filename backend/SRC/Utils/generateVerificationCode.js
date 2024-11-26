import crypto from "crypto"
export const generateVerificationToken=()=>{
    return Math.floor(100000 + Math.random() * 900000).toString();
}
export const  generateVerificationTokenCrypto=()=>{
    return crypto.randomBytes(3).toString('hex');
}