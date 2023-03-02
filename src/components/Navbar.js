import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <div className="nav-info">
        <h1 className="nav-header">Bookstore CMS</h1>
        <Link to="books">Books</Link>
        <Link to="categories">Categories</Link>
      </div>
    </nav>
  );
}

export default Nav;
