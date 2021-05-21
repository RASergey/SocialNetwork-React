import { profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS = 'SET-USER-STATUS';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

let initialState = {
	newText: '',
	posts: [
		{ id: 0, avatar: 'https://i.ytimg.com/vi/rapOSviNLkw/maxresdefault.jpg', message: 'Hi, how are you?', likesCount: 142 },
		{ id: 1, avatar: 'https://i.ytimg.com/vi/rapOSviNLkw/maxresdefault.jpg', message: 'bla bla', likesCount: 1266 },
		{ id: 2, avatar: 'https://i.ytimg.com/vi/rapOSviNLkw/maxresdefault.jpg', message: 'da da', likesCount: 1299 },
		{ id: 3, avatar: 'https://i.ytimg.com/vi/rapOSviNLkw/maxresdefault.jpg', message: 'YRYR sae', likesCount: 12 },
		{ id: 4, avatar: 'https://i.ytimg.com/vi/rapOSviNLkw/maxresdefault.jpg', message: 'It\'s my first post', likesCount: 123 }
	],
	profile: null,
	isFetching: false,
	status: ''
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
		case SET_USER_PROFILE:
			return {
				...state,
				profile: action.profile
			}
		case TOGGLE_IS_FETCHING: {
			return { ...state, isFetching: action.isFetching }
		}
		case SET_USER_STATUS: {
			return { ...state, status: action.status }
		}
		default:
			return state;
	}
}

export const addPost = () => ({ type: ADD_POST });
export const updateNewPostText = (newText) => ({ type: UPDATE_NEW_POST_TEXT, newText: newText });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export const getUserProfile = (userId) => {
	return (dispatch) => {
		if (initialState.profile) {
			dispatch(toggleIsFetching(true));
		}
		profileAPI.getProfile(userId).then(response => {
			dispatch(setUserProfile(response.data));
		})
			.finally(() => {
				dispatch(toggleIsFetching(false));
			})
	}
}

export const getUserStatus = (userId) => {
	return (dispatch) => {
		profileAPI.getStatus(userId).then(response => {
			dispatch(setUserStatus(response.data));
		})
	}
}

export const updateUserStatus = (status) => {
	return (dispatch) => {
		profileAPI.updateStatus(status).then(response => {
			if (response.data.resultCode === 0) {
				dispatch(setUserStatus(status));
			}
		})
	}
}
export default profileReducer;