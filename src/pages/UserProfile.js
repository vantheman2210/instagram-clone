import React, { useContext, useEffect } from 'react';
import '../styles/UserProfile.css';
import { AppContext } from '../AppContext';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../Firebase';
import uniqid from 'uniqid';

const UserProfile = () => {
	const [ userId, posts ] = useContext(AppContext);

	useEffect(() => {
		console.log(posts);
	}, []);

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
						<div className="post">
							<div className="info">
								<div className="user">
									<div className="profile-pic">
										<img src="img/cover 1.png" alt="" />
									</div>
									<p className="username">modern_web_channel</p>
								</div>
								<img src="img/option.PNG" className="options" alt="" />
							</div>
							<img src={post.mediaUrl} className="post-image" alt="" />
							<div className="post-content">
								<div className="reaction-wrapper">
									<img src={require("../images/like.png")} className="icon" alt="" />
									<img src={require("../images/chat.png")} className="icon" alt="" />
									<img src={require("../images/send.png")} className="icon" alt="" />
									<img src={require("../images/save.png")} className="save icon" alt="" />
								</div>
								<p className="likes">1,012 likes</p>
								<p className="description">
									<span>username </span> {post.caption}
								</p>
								<p className="post-time">2 minutes ago</p>
							</div>
							<div className="comment-wrapper">
								<img src={require("../images/smile.png")} className="icon" alt="" />
								<input type="text" className="comment-box" placeholder="Add a comment" />
								<button className="comment-btn">post</button>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default UserProfile;
