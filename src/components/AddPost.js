import React, { useState } from 'react';
import { useEffect } from 'react';
import '../styles/AddPost.css';
import { storage, auth } from '../Firebase';
import { ref, uploadBytes } from 'firebase/storage';
import { onAuthStateChanged } from 'firebase/auth';

const AddPost = () => {
	const [ post, setPost ] = useState();

	useEffect(
		() => {
			auth.onAuthStateChanged(user => { 
				if(user) { 
					console.log(user)
				
			
			const image_input = document.querySelector('#image-input');
			image_input.addEventListener('change', function(e) {
				const file = e.target.files[0];
				const refPhoto = ref(storage, `posts2`);
				const metadata = { 
					contentType: 'none',
				};
				const reader = new FileReader();
				reader.addEventListener('load', () => {
					const uploaded_image = reader.result;
					uploadBytes(refPhoto, file, metadata);
					document.querySelector('#display-image').style.backgroundImage = `url(${uploaded_image})`;
				});
				reader.readAsDataURL(this.files[0]);
			});
		} else return;
		})
		},
		[ post ]
	);

	return (
		<div className="addPost-container">
			<div id="display-image" />
			<input type="file" id="image-input" accept="image/jpeg, image/png, image/jpg" />
			<label>
				<input type="text" />
			</label>
		</div>
	);
};

export default AddPost;
