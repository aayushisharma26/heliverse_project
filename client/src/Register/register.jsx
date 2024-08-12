import React, { useState } from 'react';
import axios from 'axios';
import './register.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Student');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/register', {
        name,
        email,
        password,
        role
      });
      alert(response.data.message); 
      setName('');
      setEmail('');
      setPassword('');
      setRole('Student');
    } catch (error) {
      alert('Signup failed. Please try again.'); 
    }
  };

  return (
    <div className="signup-container">
      <h2 className="signup-title">Signup</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <input 
          type="text" 
          placeholder="Name"
          value={name} 
          onChange={(e) => setName(e.target.value)}
          className="signup-input" 
          required
        />
        <input 
          type="email" 
          placeholder="Email"
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
          className="signup-input" 
          required
        />
        <input 
          type="password" 
          placeholder="Password"
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
          className="signup-input" 
          required
        />
        <select 
          value={role} 
          onChange={(e) => setRole(e.target.value)}
          className="signup-select"
        >
          <option value="Principal">Principal</option>
          <option value="Teacher">Teacher</option>
          <option value="Student">Student</option>
        </select>
        <button type="submit" className="signup-button">Signup</button>
      </form>
    </div>
  );
};

export default Register;
