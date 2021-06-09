import { createSelector } from "reselect";

const getUsersSelector = state => state.usersPage.users;
export const getPageSizeSelector = state => state.usersPage.pageSize;
export const getTotalUsersCountSelector = state => state.usersPage.totalUsersCount;
export const getCurrentPage = state => state.usersPage.currentPage;
export const getIsFetching = state => state.usersPage.isFetching;
export const getFollowingInProgress = state => state.usersPage.followingInProgress;
export const getUsersFilter = state => state.usersPage.filter;

export const getUsers = createSelector(getUsersSelector,
	(users) => {
		return users;
	});

export const getPageSize = createSelector(getPageSizeSelector,
	(pageSize) => {
		return pageSize;
	});

export const getTotalUsersCount = createSelector(getTotalUsersCountSelector,
	(totalUsersCount) => {
		return totalUsersCount;
	});

