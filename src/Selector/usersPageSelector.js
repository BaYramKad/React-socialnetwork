import {createSelector} from "reselect";

export const getUsersPageSelector = (state) => {
    return state.usersPage.users
}

export const getUsersPage = createSelector(
    getUsersPageSelector,
    (state) => {
    return state.map((item) => item)
})

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
}
export const getCountUser = (state) => {
    return state.usersPage.countUser
}
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}
export const getPreloader = (state) => {
    return state.usersPage.preloader
}
export const disableProgress = (state) => {
    return state.usersPage.disableProgress
}
