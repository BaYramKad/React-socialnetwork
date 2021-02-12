import imgLike from "./../img/likesOrdislike/facebook_like.png";
import imgDisLike from "./../img/likesOrdislike/facebook_dislike.png";
import keanu_reeves from "./../img/userAvatar/keanu_reeves.jpg";
import foods_person from "../img/userAvatar/foods_person.jpg";
import girl from "../img/userAvatar/girl.jpg";

const addPostString = "ADD-POST";
const updateTextString = "UPDATE-TEXT-AREA";

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
    newPostText: ""
}

const profileReduser = (state = initialState, action) => {
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
        default:
            return state
    }

};

export const ADD_POST = () => ({type: addPostString});
export const UPDATE_TEXT = (text) => ({type: updateTextString, text: text});
export default profileReduser;


/*
let copyState = {...state}
            copyState.postInfo = [...state.postInfo]
            copyState.postInfo.unshift(addItemPost);
            copyState.newPostText = ""
*/