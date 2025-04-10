import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import pic1 from "../img/Tablet login-bro.png";

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('User'); // Default role is "User"
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setLoading(true);
  
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      setLoading(false);
      return;
    }
  
    try {
      const response = await axios.post('/api/Auth/signup', {
        email,
        password,
        role, // Include role in the request
      },
      {headers: {
        "Content-Type": "application/json"}
    }
    
    );
      
      alert(response.data.Message); // Notify the user
      navigate('/login'); // Redirect to login page
    } catch (error) {
      setErrorMessage(error.response?.data?.Message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className='signUp'>
      <img src={pic1} alt="Sign Up Illustration" />
      <form onSubmit={handleSignUp}>
        <h2>Sign Up</h2>
        {errorMessage && <p className='error'>{errorMessage}</p>}
        <input
          id='email'
          name='email'
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete='email'
          required
        />
        <input
          id='password'
          name='password'
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete='new-password'
          required
        />
        <input
          id='confirmPassword'
          name='confirmPassword'
          type='password'
          placeholder='Confirm Password'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          autoComplete='new-password'
          required
        />
        <select
          id='role'
          name='role'
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
        >
          <option value="" disabled>Select Role</option>
          <option value='User'>User</option>
          <option value='Therapist'>Therapist</option>
        </select>
        <button type='submit' disabled={loading}>{loading ? 'Signing up...' : 'Sign Up'}</button>
      </form>
    </div>
  );
};

export default SignUpPage;
