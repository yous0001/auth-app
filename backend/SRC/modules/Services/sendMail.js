import nanomailer from "nodemailer"
import { config } from "dotenv";
config()


const sendmailservice=async({
    to='',
    subject='no-reply',
    message=Message,
    attachments=[]
    })=>{
    const transporter=nanomailer.createTransport({
        host:'localhost',
        service:'gmail',
        port:587,
        secure:false,
        auth:{
            user:process.env.EMAIL,
            pass:process.env.EMAIL_PASSWORD
        }
    })
    const info = await transporter.sendMail({
        from: `"Fred Foo 👻" <${process.env.EMAIL}>`, 
        to, 
        subject,  
        html:message, 
        attachments
    });
    return info.accepted.length?true:false
} 
sendmailservice({
    to:"mad33833@gmail.com",
    subject:'verification email',
    message:Message,
    attachments:[]
    });

export default sendmailservice