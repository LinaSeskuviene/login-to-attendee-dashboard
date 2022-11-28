import React from "react";
import './css/loginForm.css'

export function LoginForm() {
    return ( 
        <div className="loginContainer"> 
            <h1>Welcome to event management system</h1> 
            <form className="loginForm">
                <input className="loginInput" type="text" name="userName" id="userName" placeholder="username" />
                <input className="loginInput" type="password" name="password" id="password" placeholder="password" />  
                <button type="submit" className="submitButton">Log in</button>
            </form>
        </div>
    );
}