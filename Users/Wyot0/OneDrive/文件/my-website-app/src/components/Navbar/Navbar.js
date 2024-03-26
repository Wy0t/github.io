// Navbar.js
import './Navbar.css';
import React from 'react';

function Navbar() {
  return (
    <nav className ="navbar">
      <div className ="navbar-barnd">Wyot's Website</div>
      <ul className = "navbar-links">
        <li><a href="/github.io">Home</a></li>
        <li><a href="/github.io/git">git</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
