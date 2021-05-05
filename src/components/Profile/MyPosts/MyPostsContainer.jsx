import { connect } from 'react-redux';
import { addPostCreator, updateNewPostTextCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';

let mapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newText
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		addPost: () => {
			dispatch(addPostCreator());
		},
		updateNewPostText: (text) => {
			let action = updateNewPostTextCreator(text);
			dispatch(action);
		}
	}
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;
