import {authDataApi, getApiData} from "../api/api";
import {stopSubmit} from "redux-form";

const typeAuthMe = "TYPE_AUTH_ME";
const typeAuthMePhoto = "TYPE_AUTH_ME_PHOTO"

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    photoUser: null
}


const authReduserMe = (state = initialState, action) => {
    switch (action.type) {
        case typeAuthMe:
            return {
                ...state,
                ...action.dataAuth
            }
        case typeAuthMePhoto:
            return {
                ...state,
                photoUser: action.photo
            }
        default:
            return state;
    }
};

export const connectAuthUser = (email, id, login, isAuth) => ({type: typeAuthMe, dataAuth: {email, id, login, isAuth}});
export const getUserPhotoId = (photo) => ({type: typeAuthMePhoto, photo});

export const connectThunkUserMe = () => (dispatch) => {
    return authDataApi.authMe().then(response => {
        const {email, id, login} = response.data
        if (response.resultCode === 0) {
            dispatch(connectAuthUser(email, id, login, true))
        }
    })
}

export const getUserPhoto = (id) => (dispatch) => {
    getApiData.getProfileUser(id)
        .then(response => {
                if (response.resultCode === 0) {
                    dispatch(getUserPhotoId(response.photos.small))
                }
            }
        )
}

export const loginFormMe = (email, password, rememberMe) => (dispatch) => {
    authDataApi.loginMe(email, password, rememberMe)
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(connectThunkUserMe())
            } else {
                const messageError = response.messages.length > 0 ? response.messages[0] : "Some error"
                dispatch(stopSubmit("Login", {_error: messageError}))
            }

        })
}

export const loginOutFormMe = () => (dispatch) => {
    authDataApi.logOutMe().then(response => {
        if (response.resultCode === 0) {
            dispatch(connectAuthUser(null, null, null, false))
        }
    })
}

export default authReduserMe;

//  dispatch(stopSubmit("Login", {password: "error"}))