
import keanu_reeves from "./../img/userAvatar/keanu_reeves.jpg";
const folow = "FOLOW";
const unfolow = "UNFOLOW";
const usersType = "USERS";
const typeNumPage = "TYPE_NUM_PAGE";

let initialState = {
    users: [],
    totalCount: 55,
    pageSize: 6,
    currentPage: 1
}

const usersReduser = (state = initialState, action) => {
    switch (action.type){
        case folow:
        return {
                ...state,
                users: state.users.map( item => {
                    if (action.userId === item.id) {
                        return { ...item, folowed: true}
                    }
                    return item
                })
        }
        case unfolow:
            return {
                ...state,
                users: state.users.map( item => {
                    if (action.userId === item.id) {
                        return { ...item, folowed: false}
                    }
                    return item
                })
            }

        case usersType:
            return {
                ...state,
                users: [...action.users]
            }
        case typeNumPage:
            return {
                ...state,
                currentPage: action.currentPage
            }
        default:
            return state
    }

}


export const usersFolowAC = (id) => ({ type: folow, userId: id})
export const usersUnFolowAC = (id) => ({ type: unfolow, userId: id})
export const setUsersAC = (users) => ({ type: usersType, users})
export const setPageAC = (currentPage) => ({type: typeNumPage, currentPage})

export default usersReduser;