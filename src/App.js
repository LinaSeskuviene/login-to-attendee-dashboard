import './App.css';
import React from 'react';
import { useState } from 'react';
import { LoginForm } from './LoginForm';


function App() {
  const userData = {
    username: "admin",
    password: "pass123"
  }
  const [username, setUsername] = useState({username: "", password: ""});
  const [error, setError] = useState("");

  const Login = details => {

    if (details.username === userData.username && details.password === userData.password) {
      setUsername({
        username: details.username,
        password: details.password
      });      
    } else {
      setError("Incorrect username or password")
    }
    } 

  return (
    <div className="App">
      {(username.username !== "") ? (
        <div>
          <p>you in</p>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} /> 
      )
    }   
    </div>
  );
}

export default App;
