import React from 'react';
function Signin(){
    return (
        <>
    <style>
        {`
        .signin-container {
    max-width: 350px;
    margin: 60px auto;
    padding: 2rem;
    background: #f7f7f7;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    text-align: center;
}

.signin-title {
    margin-bottom: 1rem;
    color: #222;
}

.signin-desc {
    margin-bottom: 1.5rem;
    color: #555;
}

.signin-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.signin-input {
    padding: 0.7rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
}

.signin-btn {
    padding: 0.7rem;
    background: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
}

.signin-btn:hover {
    background: #0056b3;
}
`}
    </style>
        <div className="signin-container">
            <h1 className="signin-title">Sign In</h1>
            <p className="signin-desc">Please sign in to continue.</p>
            <form className="signin-form">
                <input className="signin-input" type="text" placeholder="Name" />
                <input className="signin-input" type="Number" placeholder="Mobile Number" />
                <input className="signin-input" type="email" placeholder="Email" />
                <input className="signin-input" type="password" placeholder="Password" />
                <input className="signin-input" type="password" placeholder="Confirm Password" />
                <input className="signin-input" type="text" placeholder="Address" />
                <input className="signin-input" type="text" placeholder="City" />
                <input className="signin-input" type="text" placeholder="State" />
                <input className="signin-input" type="text" placeholder="Country" />
                <input className="signin-input" type="text" placeholder="Pincode" />
                `
                <button className="signin-btn" type="submit">Sign In</button>
            </form>
        </div>
        </>
    );
}
export default Signin;