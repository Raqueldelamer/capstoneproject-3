import { Resend } from 'resend';

const resend_api_key = process.env.resend_api_key;
console.log(resend_api_key);
const resend = new Resend(resend_api_key);
console.log("api_key:", resend);

export default async function handler(req, res) {

    const query = req.query;
    const user = query.user;  //|| "Raquel"; //default name if not provided
    const subject = req.query.subject; //|| "Hi!";
    const message = req.query.message; //|| "Hello";
    

    console.log(user);
    console.log(subject);
    console.log(message);


    const email = ({
        
        from: 'onboarding@resend.dev',
        to: 'raqueldelamer@gmail.com',
        subject: `${subject}`,
        html: `${user} says <p><strong>${message}</strong>!</p>`
    
    });
    
    await resend.emails.send(email)
        .then(() => {
            res.status(200).json({ message: "Email sent!" });
    })
        .catch(error => {
            console.error("Error sending email:", error);
            res.status(500).json({ error: 'Failed to send email'});
        });
    

}



