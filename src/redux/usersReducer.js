import { followAPI, usersAPI } from '../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_YSERS_COUNT = 'SET-TOTAL-YSERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'FOLLOWING-IN-PROGRESS';

let initialState = {
	users: [],
	pageSize: 10,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: false,
	isFollowingInProgress: []
}

const usersReducer = (state = initialState, action) => {

	switch (action.type) {
		case FOLLOW: {
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return { ...u, followed: true }
					}
					return u;
				})
			}
		}
		case UNFOLLOW: {
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return { ...u, followed: false }
					}
					return u;
				})
			}
		}
		case SET_USERS: {
			return { ...state, users: [...action.users] }
		}
		case SET_CURRENT_PAGE: {
			return { ...state, currentPage: action.currentPage }
		}
		case SET_TOTAL_YSERS_COUNT: {
			return { ...state, totalUsersCount: action.count }
		}
		case TOGGLE_IS_FETCHING: {
			return { ...state, isFetching: action.isFetching }
		}
		case TOGGLE_IS_FOLLOWING_PROGRESS: {
			return {
				...state, isFollowingInProgress: action.isFetching
					? [...state.isFollowingInProgress, action.userId]
					: state.isFollowingInProgress.filter(id => id !== action.userId)
			}
		}
		default:
			return state;
	}
}

export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unFollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_YSERS_COUNT, count: totalUsersCount });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId });

export const getUsers = (currentPage, pageSize) => {
	return (dispatch) => {
		dispatch(toggleIsFetching(true));

		usersAPI.getUsers(currentPage, pageSize).then(data => {
			dispatch(setUsers(data.items));
			dispatch(setTotalUsersCount(data.totalCount));
			dispatch(toggleIsFetching(false));
		});
	}
}

export const follow = (userId) => {
	return (dispatch) => {
		dispatch(toggleFollowingProgress(true, userId));
		followAPI.followPost(userId).then(data => {
			if (data.resultCode === 0) {
				dispatch(followSuccess(userId));
			}
		}).finally(() => {
			dispatch(toggleFollowingProgress(false, userId));
		})
	}
}

export const unFollow = (userId) => {
	return (dispatch) => {
		dispatch(toggleFollowingProgress(true, userId));
		followAPI.followDelete(userId).then(data => {
			if (data.resultCode === 0) {
				dispatch(unFollowSuccess(userId));
			}
		}).finally(() => {
			dispatch(toggleFollowingProgress(false, userId));
		})
	}
}

export default usersReducer;