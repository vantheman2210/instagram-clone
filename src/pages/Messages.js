import React, { useState } from 'react';
import { db } from '../Firebase';
import { addDoc, collection, Timestamp, doc} from 'firebase/firestore';
import { AppContext } from '../AppContext';
import { useContext } from 'react';
import '../styles/Messages.css';

const Messages = () => {
	const [ userId, posts, contacts ] = useContext(AppContext);
  const [ chatMessage, setChatMessage ] = useState({
    message: '',
    username: '',
    timestamp: ''
  });
  

	const createChat = async () => {
		const docRef = doc(db, 'messages', userId);
		const colRef = collection(docRef, 'chats');

		// Adding post doc to firebase cloud with photo url, caption, and date
		try {
			await addDoc(colRef, {
				time: Timestamp.now().toDate()
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
              <div key={i}>
                {contact}
                </div>
            )
          })}
        </div>
      </div>
			<div className="chatMessages">
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
