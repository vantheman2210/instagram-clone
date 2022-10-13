import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../Firebase';
import AddPost from './AddPost';

const UserNav = () => {
	const navigate = useNavigate();
	const signOut = () => {
		auth.signOut();
		navigate('/');
		document.querySelector('.logOut').classList.toggle('logOut-show');
		document.querySelector('.userNav').classList.toggle('userNav-show');
		document.querySelector('.navBar').classList.toggle('navBar-hide');
		document.querySelector('.logInModule').classList.toggle('logInModule-hide');
		console.log('Signed out');
	};
	return (
		<nav className="userNav">
			<div>Logo</div>
			<ul className="navLinks">
				<Link to="/">
					<li>Home</li>
				</Link>
				<Link to="/">
					<li>Messages</li>
				</Link>
				<li><AddPost/></li>
				<li>Likes</li>
				<li>
					<div className="dropdown">
						<button className="dropbtn">Profile portrait</button>
						<div className="dropdown-content">
							<Link to="/userProfile">
								<p>Profile</p>
							</Link>
							<Link to="accountSettings">
								<p>Account settings</p>
							</Link>
							<p className="logOut" onClick={signOut}>
								Log Out
							</p>
						</div>
					</div>
				</li>
			</ul>
		</nav>
	);
};

export default UserNav;
