import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from 'react-toastify';
const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
 // background: "radial-gradient(circle 815px at 23.4% -21.8%, rgba(9,29,85,1) 0.2%, rgba(0,0,0,1) 100.2%)",

 background: "   linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%)",
};

const contentStyle = {
  background: "#fff",
  padding: "40px",
  borderRadius: "8px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
  width: "400px",
  textAlign: "center",
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
  width: "100%",
  padding: "10px",
  background: "#007BFF",
  color: "#fff",
  border: "none",
  borderRadius: "25px",
  fontSize: "18px",
  cursor: "pointer",
};

const googleButtonStyle = {
  width: "100%",
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

function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handlePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const backendURL = 'https://talentjunctionbackend.azurewebsites.net/login'; 

    const data = {
      Username: username,
      Password: password,
    };

    fetch(backendURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then((response) => {
      if (response.ok) {
        // Login successful
        toast.success('Login successful', { autoClose: 2000 }); // Show success notification
        setTimeout(() => {
          history.push('/CandidateHome');
        }, 2000); // Redirect after 2 seconds
      } else {
        // Login failed
        toast.error('Login failed'); // Show error notification
        console.error('Login failed');
      }
    })
    .catch((error) => {
      // Handle network errors or other issues
      toast.error('Network error: ' + error); // Show error notification
      console.error('Network error:', error);
    });
};


  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h2 style={h2Style}>Login</h2>
        <form onSubmit={handleLogin}>
          <div style={formGroupStyle}>
            <label style={labelStyle} htmlFor="username">
              Username or Email
            </label>
            <input
              style={inputStyle}
              type="text"
              id="username"
              name="username"
              required
              value={username}
              onChange={handleUsernameChange}
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
          <button style={buttonStyle} type="submit">
            Log In
          </button>
          <button style={googleButtonStyle} type="button">
            Log in with Google
          </button>
        </form>
        <p style={pStyle}>
          Don't have an account? <a style={aStyle} href="/signup">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
