import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../Firebase';

const UserNav = () => {
	const signOut = () => {
		auth.signOut();
		document.querySelector('.logOut').classList.toggle('logOut-show');
		document.querySelector('.userNav').classList.toggle('userNav-show');
		document.querySelector('.navBar').classList.toggle('navBar-hide');
		console.log('Signed out');
	};
	return (
		<nav className="userNav">
			<div>Logo</div>
			<ul className="navLinks">
				<Link to="/">
					<li>Home</li>
				</Link>
				<Link to="messages">
					<li>Messages</li>
				</Link>
				<Link to="user">
					<li>User</li>
				</Link>
				<li onClick={signOut}>Log out</li>
			</ul>
		</nav>
	);
};

export default UserNav;
