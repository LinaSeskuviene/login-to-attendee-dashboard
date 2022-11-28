import React from 'react';
import './css/loginForm.css';
import { useState } from 'react';

export function LoginForm({submitLogin, error}) {
    const [loginData, setLoginData] = useState({username: "", password: ""})
    function handleSubmit(event) {
        event.preventDefault()
        console.log(loginData)
    }

    return ( 
        <div className="loginContainer"> 
            <h1>Welcome to event management system</h1> 
            <form className="loginForm" onSubmit={handleSubmit}>
                <input className="loginInput" type="text" name="username" 
                id="username" placeholder="username" 
                onChange={event => setLoginData({...loginData, username: event.target.value})}
                value={loginData.username} />
                <input className="loginInput" type="password" name="password" 
                id="password" placeholder="password" 
                onChange={event => setLoginData({...loginData, password: event.target.value})}
                value={loginData.password}/>  
                <button type="submit" className="submitButton">Log in</button>
            </form>
        </div>
    );
}