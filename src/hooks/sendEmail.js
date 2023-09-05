import mailer from 'feathers-mailer';
import nodemailer from 'nodemailer';

export const sendEmail = async (context) => {

  const account = await nodemailer.createTestAccount(); // internet required

  const emailConf = {
    host: account.smtp.host,
    port: account.smtp.port,
    secure: account.smtp.secure, // 487 only
    requireTLS: true,
    auth: {
      user: account.user, // generated ethereal user
      pass: account.pass // generated ethereal password
    }
  };

  // Use the service
  const email = {
    ...context.data
  };

  let transporter = nodemailer.createTransport(emailConf);
  
  transporter.sendMail(email).then(info=>{
    console.log('Preview URL: ' + nodemailer.getTestMessageUrl(info));
});

}