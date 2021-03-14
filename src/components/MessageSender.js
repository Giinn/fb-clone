import React, { useState } from 'react';
import { Avatar } from '@material-ui/core';
import VideoCamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

const MessageSender = () => {
	const [input, setInput] = useState('');
	const [imageUrl, setImageUrl] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();

		setInput('');
		setImageUrl('');
	}

	return (
		<div className="message-sender">
			<div class="message-sender__top">
				<Avatar />
				<form>
					<input 
						className="messege-sender__input" 
						placeholder="What's on your mind?" 
						value={input}
						onChange={e => setInput(e.target.value)}
					/>
					<input 
						placeholder="Image URL (Optional)" 
						value={imageUrl}
						onChange={e => setImageUrl(e.bubbles.target.value)}	
					/>
					<button onClick={handleSubmit} type="submit" >
						Hidden Submit
					</button>
				</form>
			</div>
			<div class="message-sender__bottom">
				<div class="message-sender__option">
					<VideoCamIcon  style={{ color: "red" }} />
					<h3>Live Video</h3>
				</div>
				<div class="message-sender__option">
					<PhotoLibraryIcon style={{ color: "green" }} />
					<h3>Photo/Video</h3>
				</div>
				<div class="message-sender__option">
					<InsertEmoticonIcon style={{ color: "orange" }} />
					<h3>Feeling/Activity</h3>
				</div>
			</div>
		</div>
	)
}

export default MessageSender;
