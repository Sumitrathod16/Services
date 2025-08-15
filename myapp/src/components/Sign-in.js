import React, { useState } from 'react';

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

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            // Simulate API call
            console.log("Form Data Submitted:", formData);
            alert("Form submitted successfully!");
        }
    };

    return (
        <>
            <style>
                {`
                    .signin-container {
                        max-width: 400px;
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
                        text-align: left;
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

                    .error {
                        color: red;
                        font-size: 0.85rem;
                        margin-top: -0.5rem;
                        margin-bottom: 0.5rem;
                    }
                `}
            </style>

            <div className="signin-container">
                <h1 className="signin-title">Sign In</h1>
                <p className="signin-desc">Please sign in to continue.</p>
                <form className="signin-form" onSubmit={handleSubmit}>
                    <input className="signin-input" type="text" placeholder="Name" name="name" value={formData.name} onChange={handleChange} />
                    {errors.name && <div className="error">{errors.name}</div>}

                    <input className="signin-input" type="number" placeholder="Mobile Number" name="mobile" value={formData.mobile} onChange={handleChange} />
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
            </div>
        </>
    );
}

export default Signin;
