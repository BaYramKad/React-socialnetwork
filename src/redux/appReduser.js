import {connectThunkUserMe} from "./authMeReduser";
const initializing = "INITIALIZE_ME"
const initialState = {
    initialize: false
}

const initializingReduser = (state = initialState, action) => {
    switch (action.type) {
        case initializing:
            return {
                ...state,
                initialize: true
            }
        default:
            return state;
    }
};

export const initializeMe = () => ({type: initializing});
export const initializeApp = () => (dispatch) => {
    const promise = dispatch(connectThunkUserMe())
    Promise.all([promise]).then(response => {
        dispatch(initializeMe())
    })
}
export default initializingReduser;