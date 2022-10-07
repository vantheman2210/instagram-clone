import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../Firebase';

const UserNav = () => {
	const signOut = () => {
		auth.signOut();
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
				<Link to="user">
					<li>
						<div className="dropdown">
							<button className="dropbtn">Dropdown</button>
							<div className="dropdown-content">
								<p>Link 1</p>
								<p>Link 2</p>
								<p>Link 3</p>
							</div>
						</div>
					</li>
				</Link>
				<li className='logOut' onClick={signOut}>Log out</li>
			</ul>
		</nav>
	);
};

export default UserNav;
