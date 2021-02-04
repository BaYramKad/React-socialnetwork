
import keanu_reeves from "./../img/userAvatar/keanu_reeves.jpg"
import foods_person from "./../img/userAvatar/foods_person.jpg"
import girl from "./../img/userAvatar/girl.jpg"
import woman from "./../img/userAvatar/woman.jpg"
import imgLike from "./../img/likesOrdislike/facebook_like.png"
import imgDisLike from "./../img/likesOrdislike/facebook_dislike.png"

const addPostString = "ADD-POST";
const updateTextString = "UPDATE-TEXT-AREA";

const typeUpdateStringMessage = "UPDATE_TEXT_MESSAGE";
const typeAddStringMessage = "ADD_MESSAGE";

const store = {
    _dataState: {
        profilePage: {
            postInfo: [
                {postImg: keanu_reeves, imgLike: imgLike, imgDisLike: imgDisLike, nameUser: "Numi", id: 0, countLike: [0], countDislike: [0], postText: "Helloooooo"},
                {postImg: foods_person, imgLike: imgLike, imgDisLike: imgDisLike, nameUser: "Logan", id: 0, countLike: [0], countDislike: [0], postText: "She's a beatisdful girl"},
                {postImg: girl, imgLike: imgLike, imgDisLike: imgDisLike, nameUser: "Huliganka", id: 0, countLike: [0], countDislike: [0], postText: "He's a good man"}
            ],
            newPostText: "What's new?"
        },
        dialogsPage: {

            messagesItems: [
                {message: "hello moto"},
                {message: "he"},
                {message: "hlo moto"}
            ],
            dialogsItems: [
                {name: "Bayram", userImage: keanu_reeves, id: 0},
                {name: "Filip", userImage: foods_person, id: 1},
                {name: "Maya", userImage: girl, id: 2},
                {name: "Rony", userImage: woman, id: 3}
            ],
            textMessage: ""
        }
    },
    
    _rerenderApplication(){},
    
    renderObserser (observer){
        this._rerenderApplication = observer;
    },
    appeal() {
        return this._dataState;
    },
    
    _addPost() {
        const addItemPost = {
            postImg: keanu_reeves,
            imgLike: imgLike,
            imgDisLike: imgDisLike,
            nameUser: "Anna",
            countLike: 0,
            countDislike: 0,
            postText: this.appeal().profilePage.newPostText,
            id: this.appeal().profilePage.id
        }
        if (addItemPost.postText) {
            this.appeal().profilePage.postInfo.unshift(addItemPost)
            this.appeal().profilePage.newPostText = "";
            // addItemPost.id
            this._rerenderApplication(this)
        } else { return }
        this._rerenderApplication(this)
    },
    _addMessage() {
        let newMessage = {message: this.appeal().dialogsPage.textMessage}
        this.appeal().dialogsPage.messagesItems.push(newMessage);
        this.appeal().dialogsPage.textMessage = "";
        this._rerenderApplication(this);

    },

    _updateChangeMessage(text) {
        this.appeal().dialogsPage.textMessage = text;
        this._rerenderApplication(this);
    },

    countValue(event) {
        let target = event.target;
        if (target.id === target.id && target.alt !== "dislike") {
            let obj = this.appeal().profilePage.postInfo.reduce((acc, item) => {

                return acc = item;
            }, {});
            obj.countLike.push(1)
            this._rerenderApplication(this)
        } else if (target.alt === "dislike") {
            this._rerenderApplication(this)
        }
    },

    _updateTextArea (message){
        this.appeal().profilePage.newPostText = message;
        this._rerenderApplication(this)
    },

    dispatch(action) {
        if (action.type === addPostString) {
            this._addPost();
        } else if (action.type === updateTextString) {
            this._updateTextArea(action.text);
        }
    },

    dispatchMessage(action) {
        if (action.type === typeUpdateStringMessage) {
            this._updateChangeMessage(action.text)

        } else if (action.type === typeAddStringMessage){
            this._addMessage()
            
        }
    }
}

export const ADD_POST = () => ({ type: addPostString});
export const UPDATE_TEXT = text => ({ type: updateTextString, text: text});

export const TYPE_ADD_MESSAGE = () => ( { type: typeAddStringMessage });
export const TYPE_UPDATE_TEXT_MESSAGE = text => ( { type: typeUpdateStringMessage, text: text });
// export function generateKey() {
//     const letters = 'abcdefghijklmnopqrstuvwxyz0123456789';
//     let word = '';
//     for (let i = 0; i < 15; i++) {
//         word += letters.charAt(Math.floor(Math.random() * letters.length));
//     }
//     let randomKey = word.substr(0, 5) + '-' + word.substr(5, 5) + '-' + word.substr(10, 5);
//     return randomKey.toUpperCase();
// }
export default store;