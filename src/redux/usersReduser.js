
import keanu_reeves from "./../img/userAvatar/keanu_reeves.jpg";
const folow = "FOLOW";
const unfolow = "UNFOLOW";
const usersType = "USERS"
let initialState = {
    users: [
        {
            name: "Bayram",
            folowed: false,
            statusSub: "Unfolow",
            id: 0,
            status: "Helloooooo",
            location: {
                country: "Russia",
                cityName: "Saint-Peterburg"
            },

            imgUrl: keanu_reeves
        },
        {
            name: "Nicolay",
            folowed: true,
            statusSub: "folow",
            id: 1,
            status: "welcome to my account",
            location: {
                country: "USA",
                cityName: "NeyWork"
            },
            imgUrl: keanu_reeves
        },
        {
            name: "Bayram",
            folowed: false,
            statusSub: "Unfolow",
            id: 2,
            status: "Helloooooo",
            location: {
                country: "Russia",
                cityName: "Saint-Peterburg"
            },
            imgUrl: keanu_reeves
        },
        {
            name: "Bayram",
            folowed: true,
            statusSub: "Folow",
            id: 3,
            status: "Thanks to folow me",
            location: {
                country: "Ucrine",
                cityName: "Minsk"
            },
            imgUrl: keanu_reeves
        }
    ]
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
                users: [...state.users, ...action.users]
            }
        default:
            return state
    }

}


export const usersFolowAC = (id) => ({ type: folow, userId: id})
export const usersUnFolowAC = (id) => ({ type: unfolow, userId: id})
export const setUsersAC = (users) => ({ type: usersType, users: users})
export default usersReduser;