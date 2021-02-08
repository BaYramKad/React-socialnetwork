import { combineReducers, createStore } from "redux";
import profileReduser from "./profileReduser";
import dialogsReduser from "./dialogsReduser";

const redusers = combineReducers({
    // собирать все редьюсеры и этот метод чтобы отдать reduxStorу  npm i redux --save
    profile: profileReduser,
    dialogs: dialogsReduser
});

let storeRedux = createStore(redusers);

// export default storeRedux;
