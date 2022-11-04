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
						<div class="post">
							<div class="info">
								<div class="user">
									<div class="profile-pic">
										<img src="img/cover 1.png" alt="" />
									</div>
									<p class="username">modern_web_channel</p>
								</div>
								<img src="img/option.PNG" class="options" alt="" />
							</div>
							<img src={post.mediaUrl} class="post-image" alt="" />
							<div class="post-content">
								<div class="reaction-wrapper">
									<img src="img/like.PNG" class="icon" alt="" />
									<img src="img/comment.PNG" class="icon" alt="" />
									<img src="img/send.PNG" class="icon" alt="" />
									<img src="img/save.PNG" class="save icon" alt="" />
								</div>
								<p class="likes">1,012 likes</p>
								<p class="description">
									<span>username </span> {post.caption}
								</p>
								<p class="post-time">2 minutes ago</p>
							</div>
							<div class="comment-wrapper">
								<img src="img/smile.PNG" class="icon" alt="" />
								<input type="text" class="comment-box" placeholder="Add a comment" />
								<button class="comment-btn">post</button>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default UserProfile;
