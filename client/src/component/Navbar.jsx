import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: '#333', padding: '10px 20px' }}>
      <ul style={{ listStyleType: 'none', display: 'flex', margin: 0, padding: 0 }}>
        <li style={{ marginRight: '20px' }}>
          <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontSize: '1.2rem' }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/addPet" style={{ color: '#fff', textDecoration: 'none', fontSize: '1.2rem' }}>
            Add Pet
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
