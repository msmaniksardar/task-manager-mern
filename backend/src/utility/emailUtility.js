import nodemailer from 'nodemailer'
import {EMAIL_HOST, EMAIL_PASSWORD, EMAIL_PORT, EMAIL_USER} from "../config/config.js";
import {errorResponse} from "../controllers/responseController.js";

export const sendEmail =  (emailTo , emailSubject ,emailText) => {

  try{
      const transporter = nodemailer.createTransport({
          host: EMAIL_HOST,
          port: EMAIL_PORT,
          secure: false,
          auth: {
              user: EMAIL_USER,
              pass: EMAIL_PASSWORD
          }

      })

      let mailOptions = { from : "Task Manager" , to: emailTo , subject:emailSubject , text: emailText  };

      return transporter.sendMail(mailOptions);
  }catch(err){
      return null
  }



}