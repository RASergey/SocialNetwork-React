import { createSelector } from "reselect";

const getInitializedSelector = state => state.app.initialized;

export const getInitialized = createSelector(getInitializedSelector,
	(initialized) => initialized
);