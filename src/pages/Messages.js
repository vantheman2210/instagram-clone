import React, { useEffect, useState } from 'react';
import { db } from '../Firebase';
import { addDoc, collection, Timestamp, doc, query, onSnapshot, setDocs} from 'firebase/firestore';
import { AppContext } from '../AppContext';
import { useContext } from 'react';
import '../styles/Messages.css';

const Messages = () => {
	const [ userId, posts, contacts, messages, listenToChanges] = useContext(AppContext);
  const [ chatMessage, setChatMessage ] = useState({
    message: '',
    username: '',
    timestamp: ''
  });
	const [receiverData, setReceiverData] = useState(null);

	// Create chat room 
	const createChatRoom = (e) => { 
		
		console.log(e.target.value);

		setReceiverData({
			username: e.target.value
		})

		listenToChanges(e.target.value)
	}

// Creates new chat
	const sendMessage = async (e) => {
		const docRef = doc(db, 'messages', userId)
		const colRef = collection(docRef, `chatRoom${receiverData.username}`);

		// Adding post doc to firebase cloud with photo url, caption, and date
		try {
			await addDoc(colRef, {
				username: chatMessage.username,
				time: Timestamp.now().toDate(),
				message: chatMessage.message,
				receiver: receiverData.username
			});
		} catch (error) {
			console.log(error);
		}
	};



  // Function that controls input field for chat
  const typeMessage = (e) => { 
    e.preventDefault(); 

    const value = e.target.value;

		setChatMessage({
			...chatMessage,
			[e.target.name]: value,
      username: 'hello',
      timestamp: Timestamp.now().toDate()
		});
  }

  // Function for submitting chat message
  const submitMessage = (e) => { 
    e.preventDefault();
    console.log(chatMessage)
		sendMessage();
		listenToChanges(receiverData.username)
    setChatMessage({
      message: '',
      username: '',
      timestamp: ''
    });
  }

	return (
		<div className="chatContainer">
			<div className="contacts"> 
        <p>Contacts:</p>
        <div className='contactsList'>
          {contacts[0].map((contact, i) => { 
            return(
              <button key={i} onClick={createChatRoom} value={contact}>
                {contact}
                </button>
            )
          })}
        </div>
      </div>
			<div className="chatMessages">
				{messages.map((chat, i) => { 
					return(
						<div className="container" key={i}>
					<img src="/w3images/bandmember.jpg" alt="Avatar" />
					<p>{chat.message}</p>
					<span className="time-right">Time</span>
				</div>
					)
				})}
				<div className="container">
					<img src="/w3images/bandmember.jpg" alt="Avatar" />
					<p>Hello. How are you today?</p>
					<span className="time-right">11:00</span>
				</div>
				<div className="container darker">
					<img src="/w3images/avatar_g2.jpg" alt="Avatar" className="right" />
					<p>Hey! I'm fine. Thanks for asking!</p>
					<span className="time-left">11:01</span>
				</div>
				<div className="container">
					<img src="/w3images/bandmember.jpg" alt="Avatar" />
					<p>Sweet! So, what do you wanna do today?</p>
					<span className="time-right">11:02</span>
				</div>
				<div className="container darker">
					<img src="/w3images/avatar_g2.jpg" alt="Avatar" className="right" />
					<p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
					<span className="time-left">11:05</span>
				</div>
        <form onSubmit={submitMessage} className="msger-inputarea">
    <input onChange={typeMessage} type="text" name="message" className="msger-input" value={chatMessage.message} placeholder="Enter your message..."/>
    <button type="submit" className="msger-send-btn">Send</button>
  </form>
			</div>
		</div>
	);
};

export default Messages;
