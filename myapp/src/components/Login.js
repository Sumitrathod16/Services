import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const validate = () => {
        const newErrors = {};
        if (!username.trim()) {
            newErrors.username = "Username is required";
        }
        if (!password) {
            newErrors.password = "Password is required";
        } else if (password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);
        setSubmitted(true);
        if (Object.keys(validationErrors).length === 0) {
            // Proceed with login logic here
            alert("Login successful!");
        }
    };

    return (
        <>
            <style>
                {`
                .login-container {
                    max-width: 350px;
                    margin: 60px auto;
                    padding: 32px 24px;
                    background: #fff;
                    border-radius: 12px;
                    box-shadow: 0 4px 24px rgba(30,41,59,0.08);
                    font-family: 'Segoe UI', Arial, sans-serif;
                }
                .login-title {
                    text-align: center;
                    font-size: 2em;
                    color: #1e293b;
                    margin-bottom: 10px;
                }
                .login-desc {
                    text-align: center;
                    color: #64748b;
                    margin-bottom: 24px;
                }
                .login-form {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }
                .login-input {
                    padding: 10px;
                    font-size: 1em;
                    border: 1px solid #cbd5e1;
                    border-radius: 8px;
                    outline: none;
                    transition: border-color 0.2s;
                }
                .login-input:focus {
                    border-color: #6366f1;
                }
                .login-btn {
                    padding: 10px;
                    background: #6366f1;
                    color: #fff;
                    border: none;
                    border-radius: 8px;
                    font-size: 1em;
                    cursor: pointer;
                    transition: background 0.2s;
                }
                .login-btn:hover {
                    background: #4f46e5;
                }
                .error-msg {
                    color: #dc2626;
                    font-size: 0.95em;
                    margin-top: -10px;
                    margin-bottom: 4px;
                    padding-left: 2px;
                }
                `}
            </style>
            <div className="login-container">
                <h1 className="login-title">Login</h1>
                <p className="login-desc">Please login to continue.</p>
                <form className="login-form" onSubmit={handleSubmit} noValidate>
                    <input
                        className="login-input"
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        autoComplete="username"
                    />
                    {submitted && errors.username && (
                        <div className="error-msg">{errors.username}</div>
                    )}
                    <input
                        className="login-input"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        autoComplete="current-password"
                    />
                    {submitted && errors.password && (
                        <div className="error-msg">{errors.password}</div>
                    )}
                    <button className="login-btn" type="submit">Login</button>
                </form>
            </div>
        </>
    );
}

export default Login;