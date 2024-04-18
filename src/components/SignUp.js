import React, { useState } from "react";

function SignUp() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "   linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%)",
  };
  

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };
  const contentStyle = {
    background: "#fff",
    padding: "40px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
    width: "400px",
    textAlign: "center",
  };
  const phoneLabelStyle = {
    display: "block",
    fontWeight: "bold",
    marginBottom: "5px",
    color: "#555",
  };
  const h2Style = {
    color: "#333",
    marginBottom: "20px",
  };

  const formGroupStyle = {
    textAlign: "left",
    marginBottom: "20px",
  };

  const labelStyle = {
    display: "block",
    fontWeight: "bold",
    marginBottom: "5px",
    color: "#555",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "16px",
    outline: "none",
  };

  const passwordIconStyle = {
    position: "absolute",
    top: "11px",
    right: "10px",
    cursor: "pointer",
  };

  const buttonStyle = {
    width: "90%",
    padding: "10px",
    background: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "25px", 
    fontSize: "16px",
    cursor: "pointer",
  };

  const googleButtonStyle = {
    width: "90%",
    padding: "10px",
    background: "#FF5733",
    color: "#fff",
    border: "none",
    borderRadius: "25px",
    fontSize: "18px",
    cursor: "pointer",
  };

  const pStyle = {
    marginTop: "20px",
    color: "#555",
    fontWeight: "bold",
  };

  const aStyle = {
    color: "#007BFF",
    textDecoration: "none",
  };

  const passwordMatchStyle = {
    color: "#FF5733",
  };

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h2 style={h2Style}>Sign Up</h2>
        <form>
          <div style={formGroupStyle}>
            <label style={labelStyle} htmlFor="username">
              Username
            </label>
            <input
              style={inputStyle}
              type="text"
              id="username"
              name="username"
              required
            />
          </div>
          <div style={formGroupStyle}>
            <label style={labelStyle} htmlFor="email">
              Email
            </label>
            <input
              style={inputStyle}
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div style={formGroupStyle}>
            <label style={phoneLabelStyle} htmlFor="phone">
              Phone Number
            </label>
            <input
              style={inputStyle}
              type="tel"
              id="phone"
              name="phone"
              required
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
          </div>
          <div style={formGroupStyle}>
            <label style={labelStyle} htmlFor="password">
              Password
            </label>
            <input
              style={inputStyle}
              type={passwordVisible ? "text" : "password"}
              id="password"
              name="password"
              required
              value={password}
              onChange={handlePasswordChange}
            />
            <span
              style={passwordIconStyle}
              onClick={handlePasswordVisibility}
            >
              {passwordVisible ? "🙈" : "👁️"}
            </span>
          </div>
          <div style={formGroupStyle}>
            <label style={labelStyle} htmlFor="confirm-password">
              Confirm Password
            </label>
            <input
              style={inputStyle}
              type={passwordVisible ? "text" : "password"}
              id="confirm-password"
              name="confirm-password"
              required
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            <span
              style={passwordIconStyle}
              onClick={handlePasswordVisibility}
            >
              {passwordVisible ? "🙈" : "👁️"}
            </span>
          </div>
          {password !== confirmPassword && (
            <p style={passwordMatchStyle}>Passwords do not match</p>
          )}
          <button style={buttonStyle} type="submit">
            Sign Up
          </button>
          <button style={googleButtonStyle} type="button">
            Sign up with Google
          </button>
        </form>
        <p style={pStyle}>
          Already have an account? <a style={aStyle} href="/">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
