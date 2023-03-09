import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import './styles/Navbar.css';

function Nav() {
  return (
    <nav>
      <div className="nav-content">
        <h1 className="bookstore-header">Bookstore CMS</h1>
        <Link className="books" to="/">
          BOOKS
        </Link>
        <Link className="categories" to="categories">
          CATEGORIES
        </Link>
      </div>
      <div className="logo">
        <Icon icon="ion:person-sharp" />
      </div>
    </nav>
  );
}

export default Nav;
