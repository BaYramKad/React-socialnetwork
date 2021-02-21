export const getUsersPage = (state) => {
    return state.usersPage.users
}
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
