import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import picc2  from "../img/Tablet login-cuate.png"

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setLoading(true);

    try {
      const response = await axios.post('/api/Auth/login', { email, password });
      localStorage.setItem('token', response.data.Token); // Save JWT to localStorage
      navigate('/dashboard'); // Redirect to dashboard
    } catch (error) {
      setErrorMessage(error.response?.data?.Message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='signUp'>
      <img src={picc2}></img>
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        {errorMessage && <p className='error'>{errorMessage}</p>}
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type='submit' disabled={loading}>{loading ? 'Logging in...' : 'Login'}</button>
      </form>
    </div>
  );
};

export default LoginPage;
