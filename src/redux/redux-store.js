import { combineReducers, createStore } from "redux";
import dialogsReduser from "./dialogsReducer";
import profileReduser from "./profileReducer";
import sideBarReduser from "./sideBarReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
	profilePage: profileReduser,
	dialogsPage: dialogsReduser,
	sideBar: sideBarReduser,
	usersPage: usersReducer
})

let store = createStore(reducers);

window.store = store;
export default store;