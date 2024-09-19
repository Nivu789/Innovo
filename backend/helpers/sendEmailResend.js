const {Resend} = require('resend')

const resend = new Resend('re_iUdqvpep_LMA7ijJViPjcTPup5tEFLKEs');

const sendEmailResend = async(email,name) =>{
    try {
        const { data, error } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['nivuyt789@gmail.com'],
            subject: 'Hello World',
            html: '<strong>It works!</strong>',
          });
        
          if (error) {
            console.error({ error });
            return false
          }else{
            console.log({ data });
            return true
          }
        
    } catch (error) {
        console.log(error)
    }
}



module.exports = sendEmailResend

