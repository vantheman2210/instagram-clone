import React, { useState, createContext, useEffect } from 'react';
import { auth, db } from './Firebase';
import { collection, getDocs, query, where, onSnapshot } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

export const AppContext = createContext();

export const Provider = (props) => {
	const [ userId, setUserId ] = useState();
	const [ posts, setPosts ] = useState([]);
	const [ contacts, setContacts ] = useState([]);
	const [ messages, setMessages ] = useState([]);

	// Checking wether user is signed in
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, async (user) => {
			if (user) {
				// If signed in set user id and fetch posts
				setUserId(user.uid);
				console.log('hello');
				fetchPosts(user.uid);
				getContacts(user.uid);
				fetchMessages(user.uid);
			} else {
				// User is signed out
				// remove user id and posts
				setUserId();
				setPosts([]);
				setContacts([]);
				setMessages([]);
				console.log(user);
			}
		});
		return unsubscribe;
	}, []);

	// Fetch posts to be able to display them on user page
	const fetchPosts = async (id) => {
		const querySnapshot = await getDocs(collection(db, 'posts', id, 'userPosts'));
		querySnapshot.forEach((doc) => {
			console.log(doc.data());
			setPosts((prev) => [ ...prev, doc.data() ]);
		});
	};

	const getContacts = async (id) => {
		const q = query(collection(db, 'users'), where('id', '==', id));

		const querySnapshot = await getDocs(q);
		querySnapshot.forEach((doc) => {
			// doc.data() is never undefined for query doc snapshots
			console.log(doc.data().followers);
			setContacts((prev) => [ ...prev, doc.data().followers ]);
		});
	};

	// Fetch messages to be able to display them on messages page
	const fetchMessages = async (id) => {
		const querySnapshot = await getDocs(collection(db, 'messages', id, 'chats'));
		querySnapshot.forEach((doc) => {
			console.log(doc.data());
			setMessages((prev) => [ ...prev, doc.data() ]);
		});
	};

	// Updates chat to show latest messages
	const listenToChanges = (room) => {
		const q = query(collection(db, 'messages', userId, `chatRoom${room}`));
		const unsubscribe = onSnapshot(q, (querySnapshot) => {
			const messages = [];
			querySnapshot.forEach((doc) => {
				messages.push(doc.data());
			});
			console.log(messages)
			setMessages(messages);
		});
	};

	const listenToPostChanges = () => { 
		const q = query(collection(db, 'posts', userId, 'userPosts'));
		const unsubscribe = onSnapshot(q, (querySnapshot) => {
			const posts = [];
			querySnapshot.forEach((doc) => {
				posts.push(doc.data());
			});
			
			setPosts(posts);
		});
	}

	// Delete this later
	useEffect(
		() => {
			console.log(posts);
		},
		[ posts ]
	);

	return <AppContext.Provider value={[ userId, posts, contacts, messages, listenToChanges, listenToPostChanges ]}>{props.children}</AppContext.Provider>;
};
