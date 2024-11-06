import { Resend } from 'resend';

const resend_api_key = process.env.resend_api_key;
console.log(resend_api_key);
const resend = new Resend(resend_api_key);
console.log("api_key:", resend);

export default function handler(req, res) {
    const query = req.query;
    const name = query.name;
    const message = query.message;
    const subject = query.subject;

    console.log(name);
    console.log(message);
    
    const email = ({
        
        from: 'onboarding@resend.dev',
        to: 'raqueldelamer@gmail.com',
        subject: `${subject}`,
        html: `<p><strong>${message}</strong>!</p>`
    
    });
    
    resend.emails.send(email);

    res.status(200).json({ name: name, subject: subject, message: message })

}



