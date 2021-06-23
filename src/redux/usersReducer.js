import { followAPI, usersAPI } from '../api/api';
import { updateObjectInArray } from '../utils/object-helpers';

const FOLLOW = 'social-network/users/FOLLOW';
const UNFOLLOW = 'social-network/users/UNFOLLOW';
const SET_USERS = 'social-network/users/SET-USERS';
const SET_CURRENT_PAGE = 'social-network/users/SET-CURRENT-PAGE';
const SET_FILTER = 'social-network/users/SET-FILTER';
const SET_TOTAL_YSERS_COUNT = 'social-network/users/SET-TOTAL-YSERS-COUNT';
const TOGGLE_IS_FETCHING = 'social-network/users/TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'social-network/users/FOLLOWING-IN-PROGRESS';

const initialState = {
	users: [],
	pageSize: 10,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: false,
	followingInProgress: [],
	filter: {
		term: ''
	}
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW: {
			return {
				...state,
				users: updateObjectInArray(state.users, action.userId, 'id', { followed: true })
			};
		}
		case UNFOLLOW: {
			return {
				...state,
				users: updateObjectInArray(state.users, action.userId, 'id', { followed: false })
			};
		}
		case SET_USERS: {
			return { ...state, users: [...action.users] };
		}
		case SET_CURRENT_PAGE: {
			return { ...state, currentPage: action.currentPage };
		}
		case SET_FILTER: {
			return { ...state, filter: action.payload };
		}
		case SET_TOTAL_YSERS_COUNT: {
			return { ...state, totalUsersCount: action.count };
		}
		case TOGGLE_IS_FETCHING: {
			return { ...state, isFetching: action.isFetching };
		}
		case TOGGLE_IS_FOLLOWING_PROGRESS: {
			return {
				...state, followingInProgress: action.isFetching
					? [...state.followingInProgress, action.userId]
					: state.followingInProgress.filter(id => id !== action.userId)
			};
		}
		default:
			return state;
	};
};

export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unFollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setFilter = (term) => ({ type: SET_FILTER, payload: { term } });
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_YSERS_COUNT, count: totalUsersCount });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId });

export const requestUsers = (page, pageSize, term) => {
	return async (dispatch) => {
		dispatch(toggleIsFetching(true));
		dispatch(setCurrentPage(page));
		dispatch(setFilter(term));

		const data = await usersAPI.getUsers(page, pageSize, term);
		dispatch(setUsers(data.items));
		dispatch(setTotalUsersCount(data.totalCount));
		dispatch(toggleIsFetching(false));
	};
};

const followUnFollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
	dispatch(toggleFollowingProgress(true, userId));

	await apiMethod(userId);
	dispatch(actionCreator(userId));
	dispatch(toggleFollowingProgress(false, userId));
}

export const follow = (userId) => {
	return async (dispatch) => {
		followUnFollowFlow(dispatch, userId, followAPI.follow.bind(followAPI), followSuccess);
	};
};

export const unFollow = (userId) => {
	return async (dispatch) => {
		followUnFollowFlow(dispatch, userId, followAPI.unFollow.bind(followAPI), unFollowSuccess);
	};
};

export default usersReducer;