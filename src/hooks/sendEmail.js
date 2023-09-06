import nodemailer from 'nodemailer';

export const sendEmail = async (context) => {

  let emailConf = {};

  if(!context.app.get('smtp')){
    const account = await nodemailer.createTestAccount(); // internet required

    emailConf = {
      host: account.smtp.host,
      port: account.smtp.port,
      secure: account.smtp.secure, // 487 only
      requireTLS: true,
      auth: {
        user: account.user, // generated ethereal user
        pass: account.pass // generated ethereal password
      }
    };
  } else {
    emailConf = context.app.get('smtp');
  }

  // Use the service
  const email = {
    ...context.data
  };

  const emailToContact = {
    subject: 'Accusé de récepetion',
    to: context.data.from,
    from: "deplanque.mathis@gmail.com",
    text: "Nous avons bien reçu votre demande !",
    html: `<h1>Votre demande est bien arrivée chez nous !</h1>
    <p>Bonjour, nous avons bien reçu votre demande, elle sera traitée dans les plus bref délais !</p>
    <p>Merci pour votre confiance !</p>
    <p>L'équipe M.A.D Agency</p>`,
  };

  let transporter = nodemailer.createTransport(emailConf);
  transporter.sendMail(email).then(info=>{
    console.log('Preview URL: ' + nodemailer.getTestMessageUrl(info));
  });

  transporter.sendMail(emailToContact).then(info=>{
    console.log('Preview URL: ' + nodemailer.getTestMessageUrl(info));
  });

}