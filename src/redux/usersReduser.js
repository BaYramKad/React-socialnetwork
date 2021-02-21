import {getApiData} from "../api/api";
import {act} from "@testing-library/react";

const folowType = "FOLOW";
const unfolow = "UNFOLOW";
const usersType = "USERS";
const typeNumPage = "TYPE_NUM_PAGE";
const typeToggleIsFetching = "TYPE_TOGGLE_IS_FETCHING";
const typeToggleIsDisabledProgress = "TYPE_TOGGLE_IS_DISABLED_PROGRESS";

let initialState = {
    users: [],
    totalUsersCount: 50,
    countUser: 4,
    currentPage: 1,
    preloader: true,
    disableProgress: [],
}

const usersReduser = (state = initialState, action) => {
    switch (action.type) {
        case folowType:
            return {
                ...state,
                users: state.users.map(item => {
                    if (action.userId === item.id) {
                        return {...item, followed: true}
                    }
                    return item
                })
            }
        case unfolow:
            return {
                ...state,
                users: state.users.map(item => {
                    if (action.userId === item.id) {
                        return {...item, followed: false}
                    }
                    return item
                })
            }
        case usersType:
            return {...state, users: [...action.users]}
        case typeNumPage:
            return {...state, currentPage: action.currentPage}
        case typeToggleIsFetching:
            return {...state, preloader: action.toggleBoolean}
        case typeToggleIsDisabledProgress:
            return {
                ...state,
                disableProgress: action.isDisabled
                    ? [...state.disableProgress, action.userId]
                    : state.disableProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

const folow = (id) => ({type: folowType, userId: id})
const unFolow = (id) => ({type: unfolow, userId: id})
const setUsers = (users) => ({type: usersType, users})
const setPage = (currentPage) => ({type: typeNumPage, currentPage})
const toggleIsFetching = (toggleBoolean) => ({type: typeToggleIsFetching, toggleBoolean})
const toggleIsDisabledProgress = (isDisabled, userId) => ({
    type: typeToggleIsDisabledProgress,
    isDisabled,
    userId
})


export const thunkFolow = (userId) => (dispatch) => {
    dispatch(toggleIsDisabledProgress(true, userId))
    getApiData.postFollow(userId).then(response => {
        if (response === 0) {
            dispatch(folow(userId))
            dispatch(toggleIsDisabledProgress(false, userId))
        }
    })
}

 export const thunkUnFolow = (userId) => (dispatch) => {
    dispatch(toggleIsDisabledProgress(true, userId))
    getApiData.deleteFolow(userId).then(response => {
        if (response === 0) {
            dispatch(unFolow(userId))
            dispatch(toggleIsDisabledProgress(false, userId))
        }
    })
}

export const toggleThunkIsFetching = (countUser, currentPage) => (dispatch) => {
    dispatch(toggleIsFetching(true))
    getApiData.getUsers(countUser, currentPage)
        .then( items => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(items))
        })
}

export const toggleThunkIsPage = (countUser, currentPage) => (dispatch) => {
    dispatch(toggleIsFetching(true))
    getApiData.getUsers(countUser, currentPage)
        .then( items => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(items))
            dispatch(setPage(currentPage))
        })
}







export default usersReduser;