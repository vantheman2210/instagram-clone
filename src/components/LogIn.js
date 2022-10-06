import React, { useEffect, useState } from 'react';
import '../styles/LogIn.css';
import { auth, provider } from '../Firebase';
import { signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';

const LogIn = () => {
	const signOut = () => {
		auth.signOut();
		document.querySelector('.logOut').classList.toggle('logOut-show');
		console.log('Signed out');
	};
	const signInGoogle = () => {
		signInWithPopup(auth, provider)
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const credential = GoogleAuthProvider.credentialFromResult(result);
				const token = credential.accessToken;
				// The signed-in user info.
				const user = result.user;
				console.log(user);
				document.querySelector('.logOut').classList.toggle('logOut-show');
				// ...
			})
			.catch((error) => {
				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;
				// The email of the user's account used.
				const email = error.customData.email;
				// The AuthCredential type that was used.
				const credential = GoogleAuthProvider.credentialFromError(error);
				// ...
			});
	};
	return (
		<div className="logInModule">
			<p onClick={signInGoogle}>Google</p>
			<Link to="/signUp">
			<p>Sign up</p>
			</Link>
			<p className='logOut' onClick={signOut}>Log out</p>
		</div>
	);
};

export default LogIn;
