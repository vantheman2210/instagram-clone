import React, { useEffect, useState } from 'react';
import '../styles/LogIn.css';
import { auth, provider } from '../Firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const LogIn = () => {
	const signOut = () => {
		auth.signOut();

		console.log('Signed out');
	};
	const signIn = () => {
		signInWithPopup(auth, provider)
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const credential = GoogleAuthProvider.credentialFromResult(result);
				const token = credential.accessToken;
				// The signed-in user info.
				const user = result.user;
				console.log(user);

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
			<p onClick={signIn}>Google</p>
			<p>Sign up</p>
			<p className='logOut' onClick={signOut}>Log out</p>
		</div>
	);
};

export default LogIn;
