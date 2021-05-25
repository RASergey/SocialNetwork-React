import { applyMiddleware, combineReducers, createStore } from 'redux';
import authReducer from './authReducer';
import dialogsReduser from './dialogsReducer';
import profileReduser from './profileReducer';
import sideBarReduser from './sideBarReducer';
import usersReducer from './usersReducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
	profilePage: profileReduser,
	dialogsPage: dialogsReduser,
	sideBar: sideBarReduser,
	usersPage: usersReducer,
	auth: authReducer,
	form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;