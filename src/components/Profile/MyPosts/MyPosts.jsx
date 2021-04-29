import React from 'react';
import { addPostCreator, updateNewPostTextCreator } from '../../../redux/profileReducer';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
	let postElements = props.posts.map(p => <Post avatar={p.avatar} message={p.message} likesCount={p.likesCount} />);

	let addPost = () => props.dispatch(addPostCreator());
	let onPostChange = (e) => props.dispatch(updateNewPostTextCreator(e.target.value));

	return (
		<div className={s.mypost}>
			<h3>My post</h3>
			<div className={s.yourNews}>
				<textarea className={s.textarea} onChange={onPostChange} value={props.newPostText} placeholder='your news_' />
				<button onClick={addPost}>Add Post</button>
				<button>Remove</button>
			</div>
			<div className={s.postWrapper}>
				{postElements}
			</div>
		</div>
	);
}

export default MyPosts;