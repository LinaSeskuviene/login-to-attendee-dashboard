import './App.css';
import React from 'react';
import { useState } from 'react';
import { LoginForm } from './LoginForm';
import { Dashboard } from './Dashboard';

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
    const Logout = () =>{
      setUsername({ username: "", password: ""});
    }

  return (
    <div className="App">
      {(username.username !== "") ? (
        <div>
          <button onClick={Logout} className="logoutButton">Logout</button>
          <Dashboard />
        </div>
      ) : (
        <LoginForm Login={Login} error={error} /> 
      )
    }   
    </div>
  );
}

export default App;
