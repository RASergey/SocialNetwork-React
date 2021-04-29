const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
	switch (action.type) {
		case ADD_POST:
			let newPost = {
				id: state.posts.length,
				avatar: 'https://cdn.fishki.net/upload/post/2018/05/04/2588849/7620afabdb00b651da45d24a6bf29de3.jpg',
				message: state.newText,
				likesCount: 33
			}
			state.newText = '';
			state.posts.push(newPost);
			return state;
		case UPDATE_NEW_POST_TEXT:
			state.newText = action.newText;
			return state;
		default:
			return state;
	}
}

export const addPostCreator = () => ({ type: ADD_POST });
export const updateNewPostTextCreator = (newText) => ({ type: UPDATE_NEW_POST_TEXT, newText: newText });

export default profileReducer;