import { getAuthUserData } from "./authReducer";

const INITIALIZED_SUCCESS = 'social-network/app/INITIALIZED-SUCCESS';

const initialState = {
	initialized: false
};

const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case INITIALIZED_SUCCESS:
			return {
				...state,
				initialized: true
			};
		default:
			return state;
	};
};

export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS });

export const initializedApp = () => {
	return async (dispatch) => {
		const promise = dispatch(getAuthUserData());

		await Promise.all([promise]);
		dispatch(initializedSuccess());
	};
};

export default appReducer;