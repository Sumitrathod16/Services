import React, { useState } from 'react';
import {Link} from 'react-router-dom';

function Signin() {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        password: '',
        confirmPassword: '',
        address: '',
        city: '',
        state: '',
        country: '',
        pincode: ''
    });

    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const validate = () => {
        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const mobileRegex = /^\d{10}$/;
        const pincodeRegex = /^\d{5,6}$/;

        if (!formData.name.trim()) newErrors.name = "Name is required.";
        if (!mobileRegex.test(formData.mobile)) newErrors.mobile = "Enter a valid 10-digit mobile number.";
        if (!emailRegex.test(formData.email)) newErrors.email = "Enter a valid email.";
        if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters.";
        if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match.";
        if (!formData.address) newErrors.address = "Address is required.";
        if (!formData.city) newErrors.city = "City is required.";
        if (!formData.state) newErrors.state = "State is required.";
        if (!formData.country) newErrors.country = "Country is required.";
        if (!pincodeRegex.test(formData.pincode)) newErrors.pincode = "Enter a valid pincode.";

        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            try {
                const res = await fetch('http://localhost:3000/register', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
                });

                const data = await res.json();
                setMessage(data.message);

                if (res.ok) {
                    alert("Registered successfully!");
                    setFormData({
                        name: '',
                        mobile: '',
                        email: '',
                        password: '',
                        confirmPassword: '',
                        address: '',
                        city: '',
                        state: '',
                        country: '',
                        pincode: ''
                    });
                } else {
                    alert(data.message || 'Registration failed');
                }

            } catch (err) {
                console.error('Error:', err);
                setMessage('Something went wrong');
                alert('Something went wrong while registering.');
            }
        }
    };

    return (
        <>
            <style>
                {`
                .signin-container {
                    max-width: 500px;
                    margin: 80px auto;
                    padding: 32px;
                    background: #fff;
                    border-radius: 12px;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                    font-family:'Segoe UI',sans-serif;
                }

                .signin-title {
                    font-size: 24px;
                    font-weight:bold;
                    text-align: center;
                    margin-bottom:8px;
                }

                .signin-desc {
                    font-size: 14px;
                    text-align: center;
                    margin-bottom: 24px;
                    color: #555;
                }

                .signin-form {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }

                .signin-input {
                    padding: 10px;
                    font-size: 1em;
                    border: 1px solid #ccc;
                    border-radius: 8px;
                    outline:none;
                    }
                    .signin-input focus{
                    border-color:#4f46e5;
                    }

                .signin-btn {
                    padding: 10px;
                    background-color: #4f46e5;
                    color: white;
                    border: none;
                    border-radius: 6px;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                }

                .signin-btn:hover {
                    background-color: #4338ca;
                }

                .error {
                    color: red;
                    font-size: 0.85rem;
                    margin-top: -10px;
                    margin-bottom: 6px;
                }
                    .already{
                    text-align:center;
                }
                    .already a{
                    text-decoration:none;
                    color:black;
                    margin-left:5px;
                    }
            `}</style>

            <div className="signin-container">
                <h1 className="signin-title">Sign In</h1>
                <p className="signin-desc">Please sign in to continue.</p>

                <form className="signin-form" onSubmit={handleSubmit}>
                    <input className="signin-input" type="text" placeholder="Name" name="name" value={formData.name} onChange={handleChange} />
                    {errors.name && <div className="error">{errors.name}</div>}

                    <input className="signin-input" type="tel" placeholder="Mobile Number" name="mobile" value={formData.mobile} onChange={handleChange} />
                    {errors.mobile && <div className="error">{errors.mobile}</div>}

                    <input className="signin-input" type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} />
                    {errors.email && <div className="error">{errors.email}</div>}

                    <input className="signin-input" type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} />
                    {errors.password && <div className="error">{errors.password}</div>}

                    <input className="signin-input" type="password" placeholder="Confirm Password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
                    {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}

                    <input className="signin-input" type="text" placeholder="Address" name="address" value={formData.address} onChange={handleChange} />
                    {errors.address && <div className="error">{errors.address}</div>}

                    <input className="signin-input" type="text" placeholder="City" name="city" value={formData.city} onChange={handleChange} />
                    {errors.city && <div className="error">{errors.city}</div>}

                    <input className="signin-input" type="text" placeholder="State" name="state" value={formData.state} onChange={handleChange} />
                    {errors.state && <div className="error">{errors.state}</div>}

                    <input className="signin-input" type="text" placeholder="Country" name="country" value={formData.country} onChange={handleChange} />
                    {errors.country && <div className="error">{errors.country}</div>}

                    <input className="signin-input" type="text" placeholder="Pincode" name="pincode" value={formData.pincode} onChange={handleChange} />
                    {errors.pincode && <div className="error">{errors.pincode}</div>}

                    <button className="signin-btn" type="submit">Sign In</button>
                </form>

                {message && <p style={{ color: 'green', marginTop: '1rem', textAlign: 'center' }}>{message}</p>}
                <div className="already">
                    <p>Already have an account?<Link to="/login">Log-in</Link></p>
                </div>
            </div>
        </>
    );
}

export default Signin;