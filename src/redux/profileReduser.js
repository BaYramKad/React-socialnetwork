import imgLike from "./../img/likesOrdislike/facebook_like.png";
import imgDisLike from "./../img/likesOrdislike/facebook_dislike.png";
import keanu_reeves from "./../img/userAvatar/keanu_reeves.jpg";

const addPostString = "ADD-POST";
const updateTextString = "UPDATE-TEXT-AREA";

const profileReduser = (state, action) => {
    switch(action.type) {
        case addPostString : 
            const addItemPost = {
                postImg: keanu_reeves,
                imgLike: imgLike,
                imgDisLike: imgDisLike,
                nameUser: "Anna",
                countLike: 0,
                countDislike: 0,
                postText: state.newPostText,
                id: state.id
            };

            if (addItemPost.postText) {
                state.postInfo.unshift(addItemPost);
                state.newPostText = "";
                return state;
            }
            return state;

        case updateTextString: 
            state.newPostText = action.text;
            return state;
        default: 
            return state;
    }
    
};

export const ADD_POST = () => ({ type: addPostString});
export const UPDATE_TEXT = text => ({ type: updateTextString, text: text});
export default profileReduser;
