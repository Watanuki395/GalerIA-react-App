const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);


function sendEmail(xto,FName){
    
    const msg = {
        templateId: process.env.SG_TEMPLATE_ID,
        to: xto, // Change to your recipient
        from: process.env.SG_FROM, // Change to your verified sender
        subject: 'Hola!, muchas gracias por contactar a galerIA the company SRL',
        dynamic_template_data:{
            FName
        }

    };
    sgMail
        .send(msg)
        .then(() => {
        console.log(`Email sent to ${xto}`);
        })
        .catch((error) => {
        console.error(error)
        });
};


module.exports =  {
    sendEmail : sendEmail
}