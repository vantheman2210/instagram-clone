import React, { useContext, useEffect } from 'react';
import '../styles/UserProfile.css';
import { AppContext } from '../AppContext';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../Firebase'; 
import uniqid from 'uniqid';

const UserProfile = () => {

const [ userId, posts ] = useContext(AppContext)



useEffect(() => { 
	 console.log(posts);
}, [])


	return (
		<div className="user-container">
			<div className="userInfo">
				<div>Portrait</div>
				<div className="follower-info">
					<div>
						<p>0</p>
						<p>Posts</p>
					</div>
					<div>
						<p>0</p>
						<p>Followers</p>
					</div>
					<div>
						<p>0</p>
						<p>Following</p>
					</div>
				</div>
			</div>
			<div className="postsGrid">
				{posts.map((post) => { 
					return (
						<div key={uniqid()}>
					<img src={post.mediaUrl} alt="user post" />
					<div>
						<p>{post.caption}</p>
						<p>Likes</p>
						<p>Share</p>
					</div>
					<div>Comments</div>
				</div>
					)
				})}
				
			</div>
		</div>
	);
};

export default UserProfile;
