import React from "react";
//import './Login.css';

function Login() {
    return (
        <div className="login-container">
            <h1 className="login-title">Login</h1>
            <p className="login-desc">Please login to continue.</p>
            <form className="login-form">
                <input className="login-input" type="text" placeholder="Username" />
                <input className="login-input" type="password" placeholder="Password" />
                <button className="login-btn" type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login; 