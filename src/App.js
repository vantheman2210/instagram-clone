import './App.css';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import LogIn from './components/LogIn';
import SignUp from './pages/SignUp';
import Nav from './components/Nav';
import { useEffect } from 'react';
import { auth } from './Firebase';
import { setPersistence, inMemoryPersistence } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';
import Footer from './components/Footer';
import UserNav from './components/UserNav';
import UserProfile from './pages/UserProfile';
import UserSettings from './pages/UserSettings';
import Messages from './pages/Messages';

function App() {

	setPersistence(auth, inMemoryPersistence).then(() => {}).catch((error) => {
		console.log(error.code, error.message);
	});

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				console.log(user.uid);
				document.querySelector('.logOut').classList.toggle('logOut-show');
				document.querySelector('.userNav').classList.toggle('userNav-show');
				document.querySelector('.navBar').classList.toggle('navBar-hide');
				document.querySelector('.logInModule').classList.toggle('logInModule-hide');
			} else {
				// User is signed out
				console.log('signed out');
			}
		});
		return unsubscribe;
	}, []);

	return (
		<div className="containerApp">
			<Nav />
			<UserNav />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/logIn" element={<LogIn />} />
				<Route path="/signUp" element={<SignUp />} />
				<Route path="/userProfile" element={<UserProfile />} /> 
				<Route path="/accountSettings" element={<UserSettings />} />
				<Route path="/messages" element={<Messages />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
