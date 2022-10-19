import React, { useState, createContext, useEffect } from 'react';
import { auth, db } from './Firebase';
import { collection, getDocs } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

export const AppContext = createContext();

export const Provider = (props) => {
	
	const [userId, setUserId] = useState();
	const [posts, setPosts] = useState([]);
  

	// Checking wether user is signed in
  useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, async (user) => {
			if (user) {
				// If signed in set user id and fetch posts
				setUserId(user.uid);
				console.log('hello')
				 fetchPosts(user.uid);
			} else {
				// User is signed out
				// remove user id and posts
        setUserId();
				setPosts([]);
				console.log(user);
			}
		});
		return unsubscribe;
	}, []);


	// Fetch posts to be able to display them on user page
	const fetchPosts = async (id) => { 
		const querySnapshot = await getDocs(collection(db, "posts", id, "userPosts"));
		querySnapshot.forEach((doc) => { 
			console.log(doc.data())
			setPosts((prev) => [...prev, doc.data()])
			
		})
	}


	// Delete this later
	useEffect(() => { 
		console.log(posts)
	},[posts])

	return (
		<AppContext.Provider value={[ userId, posts ]}>
			{props.children}
		</AppContext.Provider>
	);
};