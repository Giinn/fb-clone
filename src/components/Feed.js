import React, { useState, useEffect } from 'react';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
import db from '../firebase';

const Feed = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		db.collection('posts').onSnapshot((snapshot) => {
			setPosts(snapshot.docs.map((doc) => ({
				id: doc.id,
				data: doc.data()
			})));
		});
	}, [])

	return (
		<div className="feed">
			<StoryReel />
			<MessageSender />
			<Post
				profilePic="https://avatars2.githubusercontent.com/u/24712956?s=400b71527e605ae1b748fc2d4157a842e57e427ad44&v=4"
				message="Testing firebase"
				timeStamp="This is a timeStamp"
				userName="Gintaras"
				image="https://code.org/shared/images/social-media/codeorg2019_social.png"
			/>
		</div>
	)
}

export default Feed;
