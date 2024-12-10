import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

function RegistrationPage() {
  const [fullname, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleRegistration = async () => {
    if (!termsAccepted) {
      alert('Please accept the terms and conditions to proceed.');
      return;
    }
  
    try {
      const formData = new FormData();
      formData.append('fullname', fullname);
      formData.append('email', email);
      formData.append('phone', phone);
      formData.append('password', password);
      formData.append('role', role.toUpperCase());  // Ensure role is uppercase
      formData.append('termsAccepted', termsAccepted);
  
      const response = await axios.post('http://localhost:8081/api/v1/users/register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      console.log('User registered:', response.data);
      setRegistrationSuccess(true);
    } catch (error) {
      console.error('Registration error:', error);
    }
  };
  
     

  if (registrationSuccess) {
    return (
      <div className="centered-container">
        <div className="login-container">
          <h1>Registration Successful!</h1>
          <p>To log in to your new account, <a href="/">Login here</a>.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="centered-container">
      <div className="login-container">
        <h2>Registration</h2>

        {/* Full Name Input */}
        <div className="input-container">
          <input
            type="text"
            placeholder="Full Name"
            value={fullname}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        {/* Email Input */}
        <div className="input-container">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Phone Number Input */}
        <div className="input-container">
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        {/* Password Input */}
        <div className="input-container">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Role Selection */}
        <div className="input-container">
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="">Select Role</option>
            <option value="Tenant">Tenant</option>
            <option value="Landlord">Landlord</option>
            <option value="Admin">Admin</option>
          </select>
        </div>

        {/* Terms and Conditions */}
        <div className="terms-container">
          <label>
            <input
              type="checkbox"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
            />
            I agree to the <a href="/terms" target="_blank">terms and conditions</a>
          </label>
        </div>

        {/* Submit Button */}
        <button className="login-button" onClick={handleRegistration}>
          Create Account
        </button>

        {/* Alternative Options */}
        <div className="login-link">
          <p>
            Already have an account? <a href="/">Log in here</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegistrationPage;
