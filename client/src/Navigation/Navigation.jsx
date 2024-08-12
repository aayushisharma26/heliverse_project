import { Link } from 'react-router-dom';
import './navigation.css'; 

const Navigation = () => {
  return (
    <nav className="navigation">
      <Link to="/">Register</Link>
      <Link to="/login">Login</Link>
      <Link to ="/dashboard">Dashboard</Link>
    </nav>
  );
};

export default Navigation;
