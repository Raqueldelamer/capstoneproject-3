import { Resend } from 'resend';

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const resend = new Resend(RESEND_API_KEY);


export default async function handler(req, res) {

    const { user, subject, message } = req.query;

  //  const query = req.query;
  //  const user = query.user;  
  //  const subject = req.query.subject; 
  //  const message = req.query.message;
    console.log(user);
    console.log(subject);
    console.log(message);


    const email = {
        
        from: 'onboarding@resend.dev',
        to: 'raqueldelamer@gmail.com',
        subject: `${subject}`,
        html: `${user} says <p><strong>${message}</strong>!</p>`
    
    }
    
    try {
        await resend.emails.send(email);
        res.status(200).json({ message: "Email sent!" });
    
    } catch(error) {
            console.error("Error sending email:", error.response ? error.response.data : error);
            res.status(500).json({ error: 'Failed to send email', details: error.message });
        }
    

}



