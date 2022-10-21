import React from 'react';
import { db } from '../Firebase';
import { addDoc, collection, Timestamp, doc } from 'firebase/firestore';
import { AppContext } from '../AppContext';
import { useContext } from 'react';
import '../styles/Messages.css';

const Messages = () => {
	const [ userId ] = useContext(AppContext);

	const createChat = () => {
		const docRef = doc(db, 'messages', userId);
		const colRef = collection(docRef, 'chats');

		// Adding post doc to firebase cloud with photo url, caption, and date
		addDoc(colRef, {
			time: Timestamp.now().toDate()
		});
	};

	return <div />;
};

export default Messages;
