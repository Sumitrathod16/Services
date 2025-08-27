import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { doCreateUserWithEmailAndPassword, doUpdateUserProfile } from '../firebase/auth'; // Import Firebase auth helpers

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
                // Create user with email/password in Firebase Auth
                const userCredential = await doCreateUserWithEmailAndPassword(
                    formData.email,
                    formData.password
                );

                // Update user profile with displayName (name)
                await doUpdateUserProfile({ displayName: formData.name });

                // TODO: Optionally store extended info (mobile, address, etc.) in Firestore or your backend

                alert("Registration successful!");
                setMessage("Successfully registered!");

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
            } catch (error) {
                console.error("Firebase Registration Error:", error.message);
                alert("Failed to register: " + error.message);
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
                .signin-input:focus{
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
                    color:#4f46e5;
                    margin-left:5px;
                }
                /* Mobile Responsive */
                @media (max-width: 600px) {
                  .signin-container {
                    margin: 40px 16px;
                    padding: 20px;
                    max-width: 100%;
                  }

                  .signin-title {
                    font-size: 20px;
                  }

                  .signin-desc {
                    font-size: 12px;
                  }

                  .signin-input {
                    font-size: 0.9em;
                    padding: 8px;
                  }

                  .signin-btn {
                    font-size: 0.9em;
                    padding: 10px;
                  }

                  .already p {
                    font-size: 0.85em;
                  }
                }
                `}
            </style>

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
