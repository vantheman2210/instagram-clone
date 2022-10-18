import React, { useState, createContext, useEffect } from 'react';
import { auth } from './Firebase';
import { onAuthStateChanged } from 'firebase/auth';

export const AppContext = createContext();

export const Provider = (props) => {
	
	const [userId, setUserId] = useState();
  
  useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUserId(user.uid);
        console.log(userId)
			} else {
				// User is signed out
        setUserId();
				console.log(user);
			}
		});
		return unsubscribe;
	}, [userId]);

	return (
		<AppContext.Provider value={[ userId ]}>
			{props.children}
		</AppContext.Provider>
	);
};