import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

import HomeDashboard from './component/HomeDashboard';
import LoginPage from './component/LoginPage';
import HomePage from './component/HomePage';
import RegistrationPage from './component/RegistrationPage';

function App() {
  const [user, setUser] = useState('');

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser('');
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Home Dashboard as Landing Page */}
          <Route path="/" element={<HomeDashboard />} />

          {/* Login Page */}
          <Route
            path="/login"
            element={
              !user ? (
                <LoginPage onLogin={handleLogin} />
              ) : (
                <HomePage user={user} onLogout={handleLogout} />
              )
            }
          />

          {/* Registration Page */}
          <Route
            path="/register"
            element={
              !user ? (
                <RegistrationPage />
              ) : (
                <HomePage user={user} onLogout={handleLogout} />
              )
            }
          />

          {/* Home Page (Accessible after Login or Registration) */}
          <Route path="/home" element={<HomePage user={user} onLogout={handleLogout} />} />
        </Routes>

        {/* Conditional AuthLink for Login and Registration Pages */}
        <div>
          <AuthLink />
        </div>
      </div>
    </Router>
  );
}

function AuthLink() {
  const location = useLocation();
  if (location.pathname === '/login') {
    return (
      <p className="registration-link">
        Don't have an account? <Link to="/register">Click here to register</Link>
      </p>
    );
  } else if (location.pathname === '/register') {
    return (
      <p className="login-link">
        Already have an account? <Link to="/login">Click here to login</Link>
      </p>
    );
  }
  return null;
}

export default App;
