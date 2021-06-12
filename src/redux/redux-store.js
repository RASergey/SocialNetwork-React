import { applyMiddleware, combineReducers, createStore } from 'redux';
import authReducer from './authReducer';
import dialogsReduser from './dialogsReducer';
import profileReduser from './profileReducer';
import friendsReduser from './friendsReducer';
import usersReducer from './usersReducer';
import thunkMiddleware from 'redux-thunk';
import appReducer from './appReducer';

let reducers = combineReducers({
	profilePage: profileReduser,
	dialogsPage: dialogsReduser,
	friendsPage: friendsReduser,
	usersPage: usersReducer,
	auth: authReducer,
	app: appReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;