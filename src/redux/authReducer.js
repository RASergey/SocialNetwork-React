import { authAPI } from '../api/api';

const SET_USER_DATA = 'social-network/auth/SET-USER=DATA';

const initialState = {
	userId: null,
	email: null,
	login: null,
	isAuth: false,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA: {
			return {
				...state,
				...action.payload
			};
		}
		default:
			return state;
	};
};

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { userId, email, login, isAuth } });

export const getAuthUserData = () => {
	return async (dispatch) => {
		try {
			const data = await authAPI.me();
			const { id, login, email } = data.data;
			dispatch(setAuthUserData(id, email, login, true));
		} catch (error) {
			//TODO console.log(error.messages);
		};
	};
};

export const setLogin = (formData) => {
	return async (dispatch) => {
		try {
			await authAPI.signIn(formData.email, formData.password, formData.rememberMe);
			dispatch(getAuthUserData());
		} catch (error) {
			//TODO const messages = error.messages.length > 0 ? error.messages[0] : 'Some error';
			// console.log(messages);
		};
	};
};

export const setlogout = () => {
	return async (dispatch) => {
		await authAPI.logout();
		dispatch(setAuthUserData(null, null, null, false));
	};
};

export default authReducer;