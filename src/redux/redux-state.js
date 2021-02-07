import { combineReducers, createStore } from "redux";

let redusers = combineReducers({ // собирать все редьюсеры и этот метод чтобы отдать reduxStorу
    profile: profileReduser,
    dialogs: dialogsReduser
});

let createStore = createStore(redusers);
