const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
	newText: 'It-Post',
	posts: [
		{ id: 0, avatar: 'https://i.ytimg.com/vi/rapOSviNLkw/maxresdefault.jpg', message: 'Hi, how are you?', likesCount: 142 },
		{ id: 1, avatar: 'https://i.ytimg.com/vi/rapOSviNLkw/maxresdefault.jpg', message: 'bla bla', likesCount: 1266 },
		{ id: 2, avatar: 'https://i.ytimg.com/vi/rapOSviNLkw/maxresdefault.jpg', message: 'da da', likesCount: 1299 },
		{ id: 3, avatar: 'https://i.ytimg.com/vi/rapOSviNLkw/maxresdefault.jpg', message: 'YRYR sae', likesCount: 12 },
		{ id: 4, avatar: 'https://i.ytimg.com/vi/rapOSviNLkw/maxresdefault.jpg', message: 'It\'s my first post', likesCount: 123 }
	]
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			return {
				...state,
				posts: [
					...state.posts, {
						id: state.posts.length,
						avatar: 'https://cdn.fishki.net/upload/post/2018/05/04/2588849/7620afabdb00b651da45d24a6bf29de3.jpg',
						message: state.newText,
						likesCount: 33
					}
				],
				newText: '',
			}
		case UPDATE_NEW_POST_TEXT:
			return {
				...state,
				newText: action.newText
			}
		default:
			return state;
	}
}

export const addPostCreator = () => ({ type: ADD_POST });
export const updateNewPostTextCreator = (newText) => ({ type: UPDATE_NEW_POST_TEXT, newText: newText });

export default profileReducer;