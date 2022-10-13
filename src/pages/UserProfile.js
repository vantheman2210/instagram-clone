import React from 'react';
import '../styles/UserProfile.css';

const UserProfile = () => {
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
				<div>
					<img src={require(`../images/test-image.jpg`)} alt="user post" />
					<div>
						<p>Likes</p>
						<p>Share</p>
					</div>
					<div>Comments</div>
				</div>
				<div>
					<img src={require(`../images/test-image.jpg`)} alt="user post" />
					<div>
						<p>Likes</p>
						<p>Share</p>
					</div>
					<div>Comments</div>
				</div>
				<div>
					<img src={require(`../images/test-image.jpg`)} alt="user post" />
					<div>
						<p>Likes</p>
						<p>Share</p>
					</div>
					<div>Comments</div>
				</div>
				<div>
					<img src={require(`../images/test-image.jpg`)} alt="user post" />
					<div>
						<p>Likes</p>
						<p>Share</p>
					</div>
					<div>Comments</div>
				</div>
				<div>
					<img src={require(`../images/test-image.jpg`)} alt="user post" />
					<div>
						<p>Likes</p>
						<p>Share</p>
					</div>
					<div>Comments</div>
				</div>
			</div>
		</div>
	);
};

export default UserProfile;
