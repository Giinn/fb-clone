import React from 'react';
import { Avatar } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NearMeIcon from '@material-ui/icons/NearMe';
import { ExpandMoreOutlined } from '@material-ui/icons';


const Post = ({ profilePic, image, userName, timeStamp, message }) => {
	return (
		<div className="post">
			<div class="post__top">
				<Avatar src={profilePic} />
				<div class="post__top-info">
					<h3>{userName}</h3>
					<p>Timestamp...</p>
				</div>
			</div>
			<div class="post__bottom">
				<p>{message}</p>
			</div>
			<div class="post__image">
				<img src={image} alt="" />
			</div>
			<div class="post__options">
				<div class="post__option">
					<ThumbUpIcon />
					<p>Like</p>
				</div>
				<div class="post__option">
					<ChatBubbleOutlineIcon />
					<p>Comment</p>
				</div>
				<div class="post__option">
					<NearMeIcon />
					<p>Share</p>
				</div>
				<div class="post__option">
					<AccountCircleIcon />
					<ExpandMoreOutlined />
				</div>
			</div>
		</div>
	)
}

export default Post;
