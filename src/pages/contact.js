import { useState } from "react";

export default function MailPage() {
    // *Step 2: create a state variable & setter
    // using the useState Hook
    const [user, setUser] = useState("");

    async function sendMail() {
        const result = await fetch(`/api/email?user=${user}&message=You got 
            mail from ${user}`)
    }
    
    function handleClick() {
        sendMail();
    }

    function changeHandler(event) {
        const input = event.target.value;
        console.log("entered" + input);
        setUser(input);
    }

    return (
        <div className="container m-3 font-bold">
            <h1>Contact Me:</h1>
            <form>
                {/* Step 1 */}
                {/* Step 3 */}
                <input className="px-4 text-black" type="text" 
                value={user} 
                onChange={changeHandler} />
                <button className="m-1 font-bold" 
                type="button" onClick={handleClick}> :Send Mail </button>
            </form>
        </div>
    );
}