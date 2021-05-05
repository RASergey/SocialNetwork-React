import { combineReducers, createStore } from "redux";
import dialogsReduser from "./dialogsReducer";
import profileReduser from "./profileReducer";
import sideBarReduser from "./sideBarReducer";

let reducers = combineReducers({
	profilePage: profileReduser,
	dialogsPage: dialogsReduser,
	sideBar: sideBarReduser
})

let store = createStore(reducers);

export default store;