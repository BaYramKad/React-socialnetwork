import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReduser from "./profileReduser";
import dialogsReduser from "./dialogsReduser";
import usersReduser from "./usersReduser";
import authMeReduser from "./authMeReduser";
import customMiddleWare from "redux-thunk"

let redusers = combineReducers({
    profile: profileReduser,
    dialogs: dialogsReduser,
    usersPage: usersReduser,
    auth: authMeReduser
})

let store = createStore(redusers, applyMiddleware(customMiddleWare));

window.state = store
export default store;
