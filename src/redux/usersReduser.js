import {getApiData} from "../api/api";
import {funcMapUsers} from "../util/FolowUnfolow";

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
                users: funcMapUsers(state.users, action.userId, "id", {followed: true})
            }
        case unfolow:
            return {
                ...state,
                users: funcMapUsers(state.users, action.userId, "id", {followed: false})
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

const folowOrUnfolow = async (dispatch, userId, actionCreator, requestSub) => {
    dispatch(toggleIsDisabledProgress(true, userId))
    const response = await requestSub(userId)
    if (response === 0) {
        dispatch(actionCreator(userId))
        dispatch(toggleIsDisabledProgress(false, userId))
    }
}

export const thunkFolow = (userId) => async (dispatch) => {
    folowOrUnfolow(dispatch, userId, folow, getApiData.postFollow)
}

export const thunkUnFolow = (userId) => async (dispatch) => {
    folowOrUnfolow(dispatch, userId, unFolow, getApiData.deleteFolow)
}

const usersToggle = async (dispatch, countUser, currentPage, actionCreator) => {
    dispatch(toggleIsFetching(true))
    const items = await getApiData.getUsers(countUser, currentPage)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(items))
    if (actionCreator) dispatch(actionCreator(currentPage))
}

export const toggleThunkIsFetching = (countUser, currentPage) => async (dispatch) => {
    usersToggle(dispatch, countUser, currentPage)
}

export const toggleThunkIsPage = (countUser, currentPage) => async (dispatch) => {
    const actionCreator = setPage
    usersToggle(dispatch, countUser, currentPage, actionCreator)
}


export default usersReduser;