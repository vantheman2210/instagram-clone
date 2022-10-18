import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../AppContext';
import '../styles/AddPost.css';
import { storage, db } from '../Firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { doc, setDoc, addDoc, collection, Timestamp } from 'firebase/firestore';
import uniqid from 'uniqid';

const AddPost = () => {
	// Constants used to place post images in user folders in firebase
	const [ post, setPost ] = useState('');
	const [ caption, setCaption ] = useState('');
	const [ userId ] = useContext(AppContext);

	useEffect(
		() => {
			// event listeners that previews photos before posting
			const image_input = document.querySelector('#image-input');
			image_input.addEventListener('change', function(e) {
				setPost(e.target.files[0]);
				const reader = new FileReader();
				reader.addEventListener('load', async () => {
					const uploaded_image = reader.result;
					document.querySelector('#display-image').style.backgroundImage = `url(${uploaded_image})`;
				});
				reader.readAsDataURL(this.files[0]);
			});
		},
		[ post ]
	);

	// Function that uploads photo in firebase storage
	const addPhotoStorage = async (e) => {
		const file = new File([ post ], 'hello');
		const postId = uniqid();
		const refPhoto = ref(storage, `posts/${userId}/${postId}`);

		await uploadBytes(refPhoto, file);
		setPost('');
		const docRef = doc(db, 'posts', userId);
		const colRef = collection(docRef, 'userPosts');

		addDoc(colRef, {
			time: Timestamp.now().toDate(),
			mediaUrl: await getDownloadURL(refPhoto)
				.then((url) => {
					return url;
				})
				.catch((error) => {
					console.log(error);
				}),
			caption: caption
		});
	};

	const postCaption = (e) => {
		const value = e.target.value;

		setCaption(value);
	};

	return (
		<div className="addPost-container">
			<div id="display-image" />
			<input type="file" id="image-input" accept="image/jpeg, image/png, image/jpg" />
			<label>
				<input onChange={postCaption} type="text" name="caption" />
			</label>
			<button onClick={addPhotoStorage}>Add</button>
		</div>
	);
};

export default AddPost;
