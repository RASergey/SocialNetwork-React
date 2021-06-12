import { createSelector } from "reselect";

const getPostsSelector = state => state.profilePage.posts;
const getProfileSelector = state => state.profilePage.profile;
const getStatusSelector = state => state.profilePage.status;

export const getPosts = createSelector(getPostsSelector,
	(posts) => posts
);

export const getProfile = createSelector(getProfileSelector,
	(profile) => profile
);

export const getStatus = createSelector(getStatusSelector,
	(status) => status
);