import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    const newErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (validate()) {
      try {
        const res = await fetch('http://localhost:3000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        const data = await res.json();

        if (res.ok) {
          alert(data.message || 'Login successful');
        } else {
          alert(data.message || 'Login failed');
        }
      } catch (err) {
        console.error('Error:', err);
        alert('Something went wrong. Try again.');
      }
    }
  };

  return (
    <>
     
           <style>
        {`
          .login-container {
            max-width: 360px;
            margin: 80px auto;
            padding: 32px;
            background: #fff;
            border-radius: 12px;
            box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
            font-family: 'Segoe UI', sans-serif;
          }

          .login-title {
            font-size: 24px;
            font-weight: bold;
            text-align: center;
            margin-bottom: 8px;
          }

          .login-desc {
            font-size: 14px;
            text-align: center;
            color: #555;
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
            border: 1px solid #ccc;
            border-radius: 8px;
            outline: none;
          }

          .login-input:focus {
            border-color: #4f46e5;
          }

          .login-btn {
            padding: 10px;
            background-color: #4f46e5;
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 1em;
            cursor: pointer;
          }

          .login-btn:hover {
            background-color: #4338ca;
          }

          .error-msg {
            color: red;
            font-size: 0.9em;
            margin-top: -10px;
            margin-bottom: 6px;
          }
        `}
      </style>
      <div className="login-container">
        <h1 className="login-title">Login</h1>
        <p className="login-desc">Please enter your credentials to continue.</p>
        <form className="login-form" onSubmit={handleSubmit} noValidate>
          <input
            className="login-input"
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          {submitted && errors.email && <div className="error-msg">{errors.email}</div>}

          <input
            className="login-input"
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          {submitted && errors.password && <div className="error-msg">{errors.password}</div>}

          <button className="login-btn" type="submit">Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;