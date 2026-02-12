import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">
          <span className="logo-icon">📦</span>
          <span className="logo-text">StockSync</span>
        </Link>
        
        <div className="nav-links">
          {isAuthenticated ? (
            <>
              <Link to="/dashboard" className="nav-link">Dashboard</Link>
              <button onClick={logout} className="btn btn-secondary">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-link">Login</Link>
              <Link to="/signup" className="btn btn-primary">Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
