import React, { useState } from 'react';
import axios from 'axios';

function LoginPage({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = async () => {
    try {
      const url = `http://localhost:8081/api/v1/users/all?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`;
      const response = await axios.get(url);
      const userData = response.data;
      onLogin(userData);
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Sign in to your account</h2>

        {/* Email Input */}
        <div className="input-container">
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password Input */}
        <div className="input-container">
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Remember Me Checkbox */}
        <div className="options-container">
          <label>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            Remember Me
          </label>
          <a href="/forgot-password" className="forgot-password-link">Forgot Password?</a>
        </div>

        {/* Login Button */}
        <button className="login-button" type="button" onClick={handleLogin}>
          Log In
        </button>

        {/* Registration Link */}
        <p className="register-link">
          Don't have an account? <a href="/registrationpage">Register here</a>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
