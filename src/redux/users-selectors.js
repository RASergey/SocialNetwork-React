import { createSelector } from "reselect";

const getUsersSelector = state => state.usersPage.users;
const getlistPageNumbersSelector = state => state.usersPage.listPageNumbers;
export const getPageSize = state => state.usersPage.pageSize;
export const getTotalUsersCount = state => state.usersPage.totalUsersCount;
export const getCurrentPage = state => state.usersPage.currentPage;
export const getIsFetching = state => state.usersPage.isFetching;
export const getIsFollowingInProgress = state => state.usersPage.isFollowingInProgress;

export const getUsers = createSelector(getUsersSelector,
	(users) => {
		return users;
	})

export const getlistPageNumbers = createSelector(getlistPageNumbersSelector,
	(listPageNumbers) => {
		return listPageNumbers;
	})