import { connect } from 'react-redux';
import { addPost, updateNewPostText } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';

let mapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newText
	}
}

const MyPostsContainer = connect(mapStateToProps, { addPost, updateNewPostText })(MyPosts)
export default MyPostsContainer;
