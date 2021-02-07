
const typeUpdateStringMessage = "UPDATE_TEXT_MESSAGE";
const typeAddStringMessage = "ADD_MESSAGE";

const dialogsReduser = ( state, action ) => {

    switch(action.type) {
        case typeUpdateStringMessage:
            state.textMessage = action.text;
            return state;
        case typeAddStringMessage:
            let newMessage = {
                message: state.textMessage
            };
            state.messagesItems.push(newMessage);
            state.textMessage = "";
            return state;
        default: 
            return state;
    }
};

export const TYPE_ADD_MESSAGE = () => ( { type: typeAddStringMessage });
export const TYPE_UPDATE_TEXT_MESSAGE = text => ( { type: typeUpdateStringMessage, text: text });

export default dialogsReduser;