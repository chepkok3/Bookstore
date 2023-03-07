import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <div
        className="nav-content"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          gap: '2px',
        }}
      >
        <h1 className="header">Bookstore CMS</h1>
        <Link to="/" style={{ textDecoration: 'none' }}>
          Books
        </Link>
        <Link to="/categories" style={{ textDecoration: 'none' }}>
          Categories
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
