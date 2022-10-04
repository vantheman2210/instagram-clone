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
        <li onClick={clickLogIn}>Log In</li>
      </ul>
    </nav>
  )
};

export default Nav;