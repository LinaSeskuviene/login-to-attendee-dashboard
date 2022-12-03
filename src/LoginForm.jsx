import React from 'react';
import './css/loginForm.css';
import { useState } from 'react';

export function LoginForm({Login, error}) {
    const [details, setDetails] = useState({username: "", password: ""})
    function handleSubmit(event) {
        event.preventDefault()
        Login(details)
    }

    return ( 
        <div className="loginContainer"> 
            <h1 className='welcomeTitle'>Welcome to event management system</h1> 
            {(error !== "") ? (<div>{error}</div>) : ""}
            <form className="loginForm" onSubmit={handleSubmit}>
                <input className="loginInput" type="text" name="username" 
                id="username" placeholder="username" 
                onChange={event => setDetails({...details, username: event.target.value})}
                value={details.username} />
                <input className="loginInput" type="password" name="password" 
                id="password" placeholder="password" 
                onChange={event => setDetails({...details, password: event.target.value})}
                value={details.password}/>  
                <button type="submit" className="submitButton">Log in</button>
            </form>
        </div>
    );
}