import { profileAPI } from '../api/api';
import { toggleIsFetching } from './usersReducer';

const ADD_POST = 'social-network/profile/ADD-POST';
const SET_USER_PROFILE = 'social-network/profile/SET-USER-PROFILE';
const SET_USER_STATUS = 'social-network/profile/SET-USER-STATUS';
const DELETE_POST = 'social-network/profile/DELETE-POST';

const initialState = {
	posts: [
		{ id: 0, avatar: 'https://i.ytimg.com/vi/rapOSviNLkw/maxresdefault.jpg', message: 'Hi, how are you?', likesCount: 142 },
		{ id: 1, avatar: 'https://i.ytimg.com/vi/rapOSviNLkw/maxresdefault.jpg', message: 'bla bla', likesCount: 1266 },
		{ id: 2, avatar: 'https://i.ytimg.com/vi/rapOSviNLkw/maxresdefault.jpg', message: 'da da', likesCount: 1299 },
		{ id: 3, avatar: 'https://i.ytimg.com/vi/rapOSviNLkw/maxresdefault.jpg', message: 'YRYR sae', likesCount: 12 },
		{ id: 4, avatar: 'https://i.ytimg.com/vi/rapOSviNLkw/maxresdefault.jpg', message: 'It\'s my first post', likesCount: 123 }
	],
	profile: null,
	status: ''
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			return {
				...state,
				posts: [
					...state.posts, {
						id: state.posts.length,
						avatar: 'https://cdn.fishki.net/upload/post/2018/05/04/2588849/7620afabdb00b651da45d24a6bf29de3.jpg',
						message: action.newPost,
						likesCount: 33
					}
				],
				newText: '',
			};
		case SET_USER_PROFILE:
			return {
				...state,
				profile: action.profile
			};
		case SET_USER_STATUS: {
			return { ...state, status: action.status };
		}
		case DELETE_POST: {
			return { ...state, posts: state.posts.filter(p => p.id !== action.postId) };
		}
		default:
			return state;
	};
};

export const addPost = (newPost) => ({ type: ADD_POST, newPost });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status });
export const deletePost = (postId) => ({ type: DELETE_POST, postId });

export const getUserProfile = (userId) => {
	return async (dispatch) => {
		dispatch(toggleIsFetching(true));

		const response = await profileAPI.getProfile(userId);
		dispatch(setUserProfile(response.data));
		dispatch(toggleIsFetching(false));
	};
};

export const getUserStatus = (userId) => {
	return async (dispatch) => {

		const response = await profileAPI.getStatus(userId);
		dispatch(setUserStatus(response.data));
	};
};

export const updateUserStatus = (status) => {
	return async (dispatch) => {

		await profileAPI.updateStatus(status);
		dispatch(setUserStatus(status));
	};
};

export default profileReducer;