import './App.css';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import LogIn from './components/LogIn';
import SignUp from './pages/SignUp';
import Nav from './components/Nav';
function App() {
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
