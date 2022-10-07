import React, { useState } from 'react';
import '../styles/LogIn.css';
import { auth, provider } from '../Firebase';
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';

const LogIn = () => {
	const [ logIn, setLogIn ] = useState({
		email: '',
		password: ''
	});
	const handleChange = (e) => {
		const value = e.target.value;

		setLogIn({
			...logIn,
			[e.target.name]: value
		});
	};

	const signInGoogle = () => {
		signInWithPopup(auth, provider)
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				//const credential = GoogleAuthProvider.credentialFromResult(result);
				//const token = credential.accessToken;
				// The signed-in user info.
				const user = result.user;
				console.log(user);
				document.querySelector('.logOut').classList.toggle('logOut-show');
				// ...
			})
			.catch((error) => {
				// Handle Errors here.
				//const errorCode = error.code;
				//const errorMessage = error.message;
				// The email of the user's account used.
				//const email = error.customData.email;
				// The AuthCredential type that was used.
				//const credential = GoogleAuthProvider.credentialFromError(error);
				// ...
			});
	};

	const onSubmit = (e) => {
		e.preventDefault();
		signInWithEmailAndPassword(auth, logIn.email, logIn.password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				// ...
				console.log(user);
				setLogIn({
					email: '',
					password: ''
				});
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode, errorMessage);
			});
	};

	const signOut = () => {
		auth.signOut();
		document.querySelector('.logOut').classList.toggle('logOut-show');
		document.querySelector('.userNav').classList.toggle('userNav-show');
		document.querySelector('.navBar').classList.toggle('navBar-hide');
		document.querySelector('.logInModule').classList.toggle('logInModule-hide');
		console.log('Signed out');
	};
	return (
		<div className="logInModule">
			<button onClick={signInGoogle}>Log in with Google</button>
			<form onSubmit={onSubmit} id="logInForm">
				<input name="email" placeholder="username" value={logIn.email} onChange={handleChange} />
				<input name="password" placeholder="password" value={logIn.password} onChange={handleChange} />
				<input type="submit" value="Log in" />
			</form>
			<Link to="/signUp">
				<p>Sign up</p>
			</Link>
			<p className="logOut" onClick={signOut}>
				Log out
			</p>
		</div>
	);
};

export default LogIn;
