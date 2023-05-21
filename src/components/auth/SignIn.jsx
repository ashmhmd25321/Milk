import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase';
import { useHistory, Link } from 'react-router-dom';
import './Signin.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const [error, setError] = useState('');

  const signIn = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        // Navigate to "/home" after successful login
        history.push('/home');
        setError('');
      })
      .catch((error) => {
        console.log(error);
        setError('Invalid email or password. Please try again.');
      });
  };

  return (
    <div className="sign-in-container">
      <form onSubmit={signIn}>
        <h1>Log In to Your Account</h1>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="off" // Disable autofill
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="off" // Disable autofill
        />
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Log In</button>
        <br />
        <br />
        <span>Don't have an account? </span>
        <span><Link to="/signup">Sign Up</Link></span>
      </form>
    </div>
  );
};

export default SignIn;