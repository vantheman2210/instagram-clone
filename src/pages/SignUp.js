import React, { useState } from 'react';
import '../styles/SignUp.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, provider } from '../Firebase';
import { signInWithPopup } from 'firebase/auth';
import { db } from '../Firebase';
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
	const [ signUp, setSignUp ] = useState({
		username: '',
		email: '',
		password: ''
	});

	const createUser = async (id, username) => {
		console.log(db);
		console.log(collection(db, 'users'));
		try {
			const docRef = await addDoc(collection(db, 'users'), {
				id: id,
				username: username,
				posts: {
					post1: {
						likes: 0,
						comments: {
							comment1: {
								friend: 'friend1',
								comment: 'hello'
							}
						}
					}
				},
				followers: [],
				following: []
			});
			
			console.log('Document written with ID: ', docRef.id);
		} catch (e) {
			console.error('Error adding document: ', e);
		}
	};

	const navigate = useNavigate();

	const handleChange = (e) => {
		const value = e.target.value;

		setSignUp({
			...signUp,
			[e.target.name]: value
		});
	};

	const submitForm = (e) => {
		e.preventDefault();
		createUserWithEmailAndPassword(auth, signUp.email, signUp.password)
			.then((userCredential) => {
				// Signed in
				navigate('/');
				const user = userCredential.user;
				// ...
				console.log(user);
				createUser(user.uid, signUp.username)
				setSignUp({
					username: '',
					email: '',
					password: ''
				});
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				// ..
				console.log(errorCode, errorMessage);
			});
	};

	const signUpGoogle = () => {
		signInWithPopup(auth, provider)
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				//const credential = GoogleAuthProvider.credentialFromResult(result);
				//const token = credential.accessToken;
				// The signed-in user info.
				const user = result.user;
				createUser(user.uid, signUp.username)
				navigate('/');
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

	return (
		<div className="signUp-container">
			<div className="signUp-options">
				<p onClick={signUpGoogle}>Sign up with Google</p>
				<p>OR</p>
				<form onSubmit={submitForm} className="signUp-form">
					<input name="username" placeholder="Username" onChange={handleChange} value={signUp.username} />

					<input name="email" placeholder="Email" onChange={handleChange} value={signUp.email} />

					<input name="password" placeholder="Password" onChange={handleChange} value={signUp.password} />

					<input type="submit" value="Sign up" />
				</form>
				<p className="signUp-terms">
					By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .
				</p>
			</div>
		</div>
	);
};

export default SignUp;
