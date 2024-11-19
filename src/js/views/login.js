import React from "react";

export const Login = () => {
    const [userInput, setUserInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");

    
    return (
        <div>
            <label>Email</label>
            <input placeholder="Enter your email"/>
            <label>Password</label>
            <input placeholder="Enter your password"/>
            <div>
                <button>Sign in</button>
                <div>Sign up</div>
            </div>
        </div>


    )
}