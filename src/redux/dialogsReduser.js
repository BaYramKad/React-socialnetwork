import keanu_reeves from "../img/userAvatar/keanu_reeves.jpg";
import foods_person from "../img/userAvatar/foods_person.jpg";
import girl from "../img/userAvatar/girl.jpg";
import woman from "../img/userAvatar/woman.jpg";

const typeUpdateStringMessage = "UPDATE_TEXT_MESSAGE";
const typeAddStringMessage = "ADD_MESSAGE";


const initialState = {
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

const dialogsRed = (state = initialState, action) => {
    switch (action.type) {
        case typeUpdateStringMessage:
            return {
                ...state,
                textMessage: action.text
            }
        case typeAddStringMessage:
            let newMessage = {
                message: state.textMessage
            };
            return {
                ...state,
                messagesItems: [...state.messagesItems, newMessage],
                textMessage: ""
            }
        default:
            return state;
    }
};

export const TYPE_ADD_MESSAGE = () => ({type: typeAddStringMessage});
export const TYPE_UPDATE_TEXT_MESSAGE = text => ({type: typeUpdateStringMessage, text: text});

export default dialogsRed;