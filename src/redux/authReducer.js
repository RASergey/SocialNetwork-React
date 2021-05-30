import { stopSubmit } from 'redux-form';
import { authAPI } from '../api/api';

const SET_USER_DATA = 'SET-USER=DATA';

let initialState = {
	userId: null,
	email: null,
	login: null,
	isAuth: false
}

const authReducer = (state = initialState, action) => {

	switch (action.type) {
		case SET_USER_DATA: {
			return {
				...state,
				...action.payload
			}
		}
		default:
			return state;
	}
}

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { userId, email, login, isAuth } });

export const getAuthUserData = () => {
	return (dispatch) => {
		return authAPI.me().then(data => {
			let { id, login, email } = data.data;
			dispatch(setAuthUserData(id, email, login, true));
		}).catch(() => {
		})
	}
}

export const setLogin = (formData) => {
	return (dispatch) => {
		authAPI.signIn(formData.email, formData.password, formData.rememberMe).then(() => {
			dispatch(getAuthUserData());
		}).catch((data) => {
			let messages = data.messages.length > 0 ? data.messages[0] : 'Some error';
			dispatch(stopSubmit('login', { _error: messages }));
		})
	}
}

export const setlogout = () => {
	return (dispatch) => {
		authAPI.logout().then(() => {
			dispatch(setAuthUserData(null, null, null, false));
		})
	}
}

export default authReducer;