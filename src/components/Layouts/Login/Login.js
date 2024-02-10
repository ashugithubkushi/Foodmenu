import { NavLink } from "react-router-dom";
import "./Login.css"
import React, { useState } from 'react';

  const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault(); // Prevent default form submission behavior
      console.log('Username:', username);
      console.log('Password:', password);
      // Replace with your login logic (e.g., API call)
    };
  
    return (
      <div className="App">
      
        <form onSubmit={handleSubmit}>
        <h1>Login Page</h1>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* <button type="submit">Log In</button> */}
          <NavLink to="/" type="button" className="btn btn-success">Login</NavLink>
        </form>

  
      </div>
    );
  }

  

export default Login
