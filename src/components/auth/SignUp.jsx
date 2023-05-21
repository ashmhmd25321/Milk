import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase';
import { useHistory, Link } from 'react-router-dom';
import './Signup.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [signUpSuccess, setSignUpSuccess] = useState(false);

  const signUp = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    if (password.length < 6) {
      setError('Password should have at least 6 characters.');
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        setSignUpSuccess(true);
        setError('');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const closePopup = () => {
    setSignUpSuccess(false);
  };

  return (
    <div className="sign-up-container">
      <form onSubmit={signUp}>
        <h1>Create Account</h1>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Sign Up</button>
        <br />
        <br />
        <span>Already have an account? </span>
        <span><Link to="/">Sign In</Link></span>
      </form>
      {signUpSuccess && (
        <div className="popup">
          <p className="success-message">You have signed up successfully!</p>
          <button className="close-button" onClick={closePopup}>
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default SignUp;