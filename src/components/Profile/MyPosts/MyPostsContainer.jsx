import React from 'react';
import { addPostCreator, updateNewPostTextCreator } from '../../../redux/profileReducer';
import StoreContext from '../../../StoreContext';
import MyPosts from './MyPosts';

const MyPostsContainer = () => {
	return (
		<StoreContext.Consumer>
			{ (store) => {
				let state = store.getState();
				let addPost = () => store.dispatch(addPostCreator());
				let onPostChange = (text) => {
					let action = updateNewPostTextCreator(text);
					store.dispatch(action);
				}
				return (
					<MyPosts
						updateNewPostText={onPostChange}
						addPost={addPost}
						posts={state.profilePage.posts}
						newPostText={state.profilePage.newText}
					/>
				)
			}}
		</StoreContext.Consumer>
	)
}

export default MyPostsContainer;
