import { useState } from "react";

export default function MailPage() {
    // *Step 2: create a state variable & setter
    // using the useState Hook
    const [user, setUser] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");

    async function sendMail() {
        try {
            const response = await fetch(`/api/email?user=${user}&subject=${subject}&message=${message}`);
        
            if (response.ok) {
                setStatus("Message sent successfully!");
            } else {
                setStatus("Failed to send the message.");
            }
        } catch (error) {
            console.error("Error sending mail:", error);
            setStatus("An error occurred while sending the message.");
        }
    }
    
    function handleClick() {
        sendMail();
    }

    function changeHandler(event) {
        const input = event.target.value;
        console.log(event);
        setUser(input);
    }

    function messageChangeHandler(event) {
        console.log(event);
        const messageInput = event.target.value;
        setMessage(messageInput);
    }
    
    function subjectChangeHandler(event) {
        console.log(event);
        const subjectInput = event.target.value;
        setSubject(subjectInput);
    }

    return (
        <div className="bg-black h-screen text-white m-1">
            <h1 className="text-justify text-2xl m-2 font-bold">Contact Me:</h1>
            <form className="ml-2">
                Name:<input id="user-name" className="px-4 ml-1 mb-1 text-black flex" type="text" value={user} 
                onChange={changeHandler} /> 

                Subject: <input id="subject" className="px-4 ml-1 mb-1 text-black flex" type="text" value={subject} 
                onChange={subjectChangeHandler} />
            
                Message: <textarea id="message" className="border-blue-900 px-4 ml-1 mb-1 text-black flex" value={message} 
                type="text" onChange={messageChangeHandler} /> 
            </form>

            <form>
                <button id="send-message-button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600
                to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none
                focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg 
                text-m px-2 py-2.5 text-center me-2 mt-3 ml-2" 
                type="button" onClick={handleClick}> Send Message 
                </button>
            </form>
            {/* Feedback message */}
            {status && <p className="mt-4 text-center">{status}</p>}
        </div>
    );
}