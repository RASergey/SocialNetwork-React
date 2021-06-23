import { createSelector } from "reselect";

export const getUserId = state => state.auth.userId;
export const getLogin = state => state.auth.login;
export const getEmail = state => state.auth.email;
const getIsAuthSelector = state => state.auth.isAuth;

export const getIsAuth = createSelector(getIsAuthSelector,
	(isAuth) => isAuth
);

