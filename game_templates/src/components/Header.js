import './Header.css'; 
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <h1>MARIO UNLEASHED</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
