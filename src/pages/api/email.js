import { Resend } from 'resend';

const resend_api_key = process.env.resend_api_key;
console.log(resend_api_key);
const resend = new Resend(resend_api_key);
console.log("api_key:", resend);

export default function handler(req, res) {
    const query = req.query;
    const name = query.name || "User"; //default name if not provided
    const message = query.message || "Hey. Everything is going to be ok, I think. You can always move to France.";
    const subject = query.subject || "S.O.S.";

    console.log(name);
    console.log(message);
    
    const email = ({
        
        from: 'onboarding@resend.dev',
        to: 'raqueldelamer@gmail.com',
        subject: `${subject}`,
        html: `<p><strong>${message}</strong>!</p>`
    
    });
    
    resend.emails.send(email)
        .then(() => {
            res.status(200).json({ name: name, subject: subject, message: message });
    })
        .catch(error => {
            console.error("Error sending email:", error);
            res.status(500).json({ error: 'Failed to send emaail'});
        });
    

}



