import { Resend } from 'resend';
import { Redis } from '@upstash/redis';

const resend_api_key = process.env.resend_api_key;
const resend = new Resend(resend_api_key);
const redis = Redis.fromEnv();


export default async function handler(req, res) {

    const { user, subject, message } = req.query;

    console.log(user);
    console.log(subject);
    console.log(message);


    const email = {
        
        from: 'onboarding@resend.dev',
        to: ['raqueldelamer@gmail.com'],
        subject: `${subject}`,
        html: `${user} says <p><strong>${message}</strong>!</p>`
    
    }
    
    try {
        await resend.emails.send(email);
        res.status(200).json({ message: "Email sent!" });

        await redis.incr('count');
    
    } catch(error) {
            
        console.error("Error sending email:", error.response ? error.response.data : error);
        res.status(500).json({ error: 'Failed to send email', details: error.message });
    }
    

}



