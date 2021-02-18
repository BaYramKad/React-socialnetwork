import {getApiData} from "../api/api";
import {act} from "@testing-library/react";

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
                ...action.dataAuth,
                isAuth: action.dataAuth.email ? true : false
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

export const connectAuthUser = (email, id, login) => ({type: typeAuthMe, dataAuth: {email, id, login}});
export const getUserPhotoId = (photo) => ({type: typeAuthMePhoto, photo});

export const connectThunkUserMe = () => (dispatch) => {
    getApiData.authMe().then(response => {
        const {email, id, login} = response
        dispatch(connectAuthUser(email, id, login))
    })
}

export const getUserPhoto = (id) => (dispatch) => {
    getApiData.getProfileUser(id).then(response => {
        dispatch(getUserPhotoId(response.photos.small))
    })
}
export default authReduserMe;