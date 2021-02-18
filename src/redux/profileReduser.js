import imgLike from "./../img/likesOrdislike/facebook_like.png";
import imgDisLike from "./../img/likesOrdislike/facebook_dislike.png";
import keanu_reeves from "./../img/userAvatar/keanu_reeves.jpg";
import foods_person from "../img/userAvatar/foods_person.jpg";
import girl from "../img/userAvatar/girl.jpg";
import {getApiData} from "../api/api";

const addPostString = "ADD_POST";
const updateTextString = "UPDATE_TEXT_AREA";
const updateUserProfile = "UPDATE_USER_PROFILE"
const setUserStatus = "SET_USER_STATUS"
const upadateStatus = "UPDATE_STATUS"
const STATUS = "STATUS"
let initialState = {
    postInfo: [
        {
            postImg: keanu_reeves,
            imgLike: imgLike,
            imgDisLike: imgDisLike,
            nameUser: "Numi",
            id: 0,
            countLike: [0],
            countDislike: [0],
            postText: "Helloooooo"
        },
        {
            postImg: foods_person,
            imgLike: imgLike,
            imgDisLike: imgDisLike,
            nameUser: "Logan",
            id: 0,
            countLike: [0],
            countDislike: [0],
            postText: "She's a beatisdful girl"
        },
        {
            postImg: girl,
            imgLike: imgLike,
            imgDisLike: imgDisLike,
            nameUser: "Huliganka",
            id: 0,
            countLike: [0],
            countDislike: [0],
            postText: "He's a good man"
        }
    ],
    newPostText: "",
    userData: null,
    status: ""
}

const profileReduser = (state = initialState, action) => {
    console.log(state)
    switch (action.type) {
        case addPostString :
            if (state.newPostText) {
                let addItemPost = {
                    postImg: keanu_reeves,
                    imgLike: imgLike,
                    imgDisLike: imgDisLike,
                    nameUser: "Anna",
                    countLike: 0,
                    countDislike: 0,
                    postText: state.newPostText,
                    id: 1
                }
                return {
                    ...state,
                    postInfo: [addItemPost, ...state.postInfo],
                    newPostText: ""
                }
            }
        case updateTextString:
            return {
                ...state,
                newPostText: action.text
            }

        case updateUserProfile:
            return {
                ...state, userData: {...action.userData}
            }

        case setUserStatus:
            return {
                ...state,
                status: action.status
            }
        case upadateStatus:
            return {
                ...state,
                status: action.text
            }

        case STATUS:
            return {
                ...state,
                status: action.statusUpdate
            }
        default:
            return state
    }

};

export const addNewPost = () => ({type: addPostString});
export const changeText = (text) => ({type: updateTextString, text: text});
export const setProfileUser = (userData) => ({type: updateUserProfile, userData})
export const setStatusUser = (status) => ({type: setUserStatus, status})
export const changeProfileStatus = (text) => ({type: upadateStatus, text})
export const setStatus = (statusUpdate) => ({type: STATUS, statusUpdate})

export const getProfileThunk = (userId) => (dispatch) => {
    getApiData.getProfileUser(userId)
        .then(response => dispatch(setProfileUser(response)))
}

export const getProfileStatus = (userId) => (dispatch) => {
    getApiData.getStatus(userId)
        .then(response => dispatch(setStatusUser(response)))
}

export const updateStatusProfile = (status) => (dispatch) => {
    getApiData.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                debugger
                dispatch(setStatus(status))
            }
        })
}

export default profileReduser;
/*
let copyState = {...state}
            copyState.postInfo = [...state.postInfo]
            copyState.postInfo.unshift(addItemPost);
            copyState.newPostText = ""
*/