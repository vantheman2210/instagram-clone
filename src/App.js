import './App.css';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import LogIn from './components/LogIn';
import SignUp from './pages/SignUp';
import Nav from './components/Nav';
import { auth } from './Firebase';
import { setPersistence, inMemoryPersistence } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';

function App() {
	setPersistence(auth, inMemoryPersistence).then(() => {}).catch((error) => {
		console.log(error.code, error.message);
	});
	auth.onAuthStateChanged(function(user) {
		if (user) {
			// User is signed in.
			console.log(user)
		} else {
			// No user is signed in.
			console.log('signed out')
		}
	});
	return (
		<div className="containerApp">
			<Nav/>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/logIn" element={<LogIn />} />
				<Route path="/signUp" element={<SignUp />} />
			</Routes>
		</div>
	);
}

export default App;
