import { Resend } from 'resend';

const resend = new Resend('re_g7fTSP5M_ChFbq3sAAgCg3WJc6qHYuFU5');

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

    res.status(200).json({ name: name, message: message })

}

    


