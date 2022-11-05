import React from "react"; 
import {Link} from 'react-router-dom';
import "../styles/Nav.css";

const Nav = () => { 

  const clickLogIn = () => { 
    document.querySelector('.logInModule').classList.toggle('logInModule-show');
  }
  return (
    <nav className="navBar">
      <div>Logo</div>
      <ul className="navLinks">
        <Link to="/">
        <li>Home</li>
        </Link>
        <Link to="logIn">
        <li>Log In</li>
        </Link>
        <Link to="signUp">
        <li>Sign Up</li>
        </Link>
      </ul>
    </nav>
  )
};



export default Nav;