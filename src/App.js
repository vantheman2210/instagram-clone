import './App.css';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import LogIn from './components/LogIn';
import SignUp from './pages/SignUp';
import Nav from './components/Nav';
import { auth } from './Firebase';
import { setPersistence, inMemoryPersistence } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';
import Footer from './components/Footer';
import UserNav from './components/UserNav';

function App() {
	setPersistence(auth, inMemoryPersistence).then(() => {}).catch((error) => {
		console.log(error.code, error.message);
	});
	auth.onAuthStateChanged(function(user) {
		if (user) {
			// User is signed in.
			console.log(user);
			document.querySelector('.logOut').classList.toggle('logOut-show');
			document.querySelector('.userNav').classList.toggle('userNav-show');
			document.querySelector('.navBar').classList.toggle('navBar-hide');
		} else {
			// No user is signed in.
			console.log('signed out');
		
		}
	});
	return (
		<div className="containerApp">
			<Nav />
			<UserNav />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/logIn" element={<LogIn />} />
				<Route path="/signUp" element={<SignUp />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
