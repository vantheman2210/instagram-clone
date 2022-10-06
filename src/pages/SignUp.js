import React, { useEffect, useState } from 'react';
import '../styles/SignUp.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase';
const SignUp = () => {
	const [ signUp, setSignUp ] = useState({
		username: '',
		email: '',
		password: ''
	});
	const handleChange = (e) => {
		const value = e.target.value;

		setSignUp({
			...signUp,
			[e.target.name]: value
		})
	}; 

	const submitForm = (e) => { 
		e.preventDefault();
		createUserWithEmailAndPassword(auth, signUp.email, signUp.password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
		console.log(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
		console.log(errorCode, errorMessage)
  });
	} 


	
	return (
		<div className="signUp-container">
			<div className="signUp-options">
				<p>Log in with Google</p>
				<p>OR</p>
				<form onSubmit={submitForm} className="signUp-form">
					<input name="username" placeholder="Username" onChange={handleChange} value={signUp.username} />

					<input name="email" placeholder="Email" onChange={handleChange} value={signUp.email} />

					<input name="password" placeholder="Password" onChange={handleChange} value={signUp.password} />

					<input type="submit" />
				</form>
				<p className="signUp-terms">
					By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .
				</p>
			</div>
		</div>
	);
};

export default SignUp;
