import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './dashboard.css';

const Dashboard = () => {
  const [classrooms, setClassrooms] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchClassrooms = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/classrooms');
        setClassrooms(response.data);
      } catch (err) {
        setError('Failed to fetch classrooms');
        console.error(err);
      }
    };

    fetchClassrooms();
  }, []);

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Classrooms</h2>
      {error && <p className="dashboard-error">{error}</p>}
      <ul className="classroom-list">
        {classrooms.map((classroom) => (
          <li key={classroom._id} className="classroom-item">
            <h3>{classroom.name}</h3>
            <p>Start Time: {classroom.startTime}</p>
            <p>End Time: {classroom.endTime}</p>
            <p>Days: {classroom.days}</p>
            <p>Teacher ID: {classroom.teacher}</p>
            <p>Student IDs: {classroom.students.join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
