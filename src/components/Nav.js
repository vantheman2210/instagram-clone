import React from "react"; 
import "../styles/Nav.css";

const Nav = () => { 
  return (
    <nav className="navBar">
      <div>Logo</div>
      <ul className="navLinks">
        <li>Home</li>
        <li>Log In</li>
        <li>Sign Up</li>
      </ul>
    </nav>
  )
};

export default Nav;