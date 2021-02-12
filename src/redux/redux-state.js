import { combineReducers, createStore } from "redux";
import profileReduser from "./profileReduser";
import dialogsReduser from "./dialogsReduser";
import usersReduser from "./usersReduser";


let redusers = combineReducers({
    profile: profileReduser,
    dialogs: dialogsReduser,
    usersPage: usersReduser
})

let store = createStore(redusers);

export default store;
