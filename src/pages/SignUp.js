import React from 'react';
import '../styles/SignUp.css';

const SignUp = () => {
	return (
		<div className="signUp-container">
			<div className="signUp-options">
				<p>Log in with Google</p>
				<p>OR</p>
				<form className="signUp-form">
					<input placeholder="Username" />

					<input placeholder="Email" />

					<input placeholder="Password" />

					<button>Sign up</button>
				</form>
				<p className="signUp-terms">
					By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .
				</p>
			</div>
		</div>
	);
};

export default SignUp;
