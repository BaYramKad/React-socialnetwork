import dialogsStyle from "./DialogsBlock.module.css";
import React from "react"
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import { TYPE_ADD_MESSAGE, TYPE_UPDATE_TEXT_MESSAGE } from "./../../redux/dialogsReduser";

const DialogsBlock = (props) => {
    
    const dialog = props.dialogsItems.map( item => <Dialog userImage={item.userImage} name={item.name} id={`/dialogs/${item.id}`}/> );
    const message = props.messagesItems.map( item => <Message message={item.message}/> );

    const refMessage = React.createRef();
    const addMessage = () => {
        props.dispatch(TYPE_ADD_MESSAGE());
    };

    const onChangeMessage = () => {
        const valueMessage = refMessage.current.value;
        props.dispatch(TYPE_UPDATE_TEXT_MESSAGE(valueMessage))
    }

    return (
        <div className={dialogsStyle.dialogs_block}>
            <div className={dialogsStyle.scope}>
                <ul>
                    { dialog }
                </ul>
            </div>
            
            <div className={dialogsStyle.messages}>
                { message }
                <div className={dialogsStyle.sendMessage}>
                    <textarea onChange={onChangeMessage} placeholder="Send Message" value={props.textAreaDialog} ref={refMessage}></textarea>
                    <button onClick={addMessage} className="button button-message">send</button>
                </div>
            </div>
        </div>
    )
}

export default DialogsBlock;