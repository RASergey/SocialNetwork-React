import React from 'react';
import { addPostCreator, updateNewPostTextCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
	let state = props.store.getState();
	debugger;
	let addPost = () => props.store.dispatch(addPostCreator());
	let onPostChange = (text) => {
		let action = updateNewPostTextCreator(text);
		props.store.dispatch(action);
	}
	return (
		<MyPosts
			updateNewPostText={onPostChange}
			addPost={addPost}
			posts={state.profilePage.posts}
			newPostText={state.profilePage.newText}
		/>
	)
}

export default MyPostsContainer;