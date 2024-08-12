import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './Register/register.jsx';
import Login from './Login/login.jsx';
import Dashboard from './Dashboard/dashboard.jsx'; 
import Navigation from './Navigation/Navigation.jsx'; 
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation /> 
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
