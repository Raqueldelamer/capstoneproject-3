import { Resend } from 'resend';

const resend = new Resend('re_g7fTSP5M_ChFbq3sAAgCg3WJc6qHYuFU5');

export default function handler(req, res) {
    
    resend.emails.send ({
        
        from: 'onboarding@resend.dev',
        to: 'raqueldelamer@gmail.com',
        subject: 'Hello World',
        html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
    
    });
    
    res.status(200).json({ name: "John Doe" })

}

    


