import dialogsStyle from "./DialogsBlock.module.css";
import React from "react"
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const DialogsBlock = (props) => {
    const dialogMap = props.dialogMap.map(item => <Dialog userImage={item.userImage} name={item.name}
                                                          id={`/dialogs/${item.id}`}/>)
    const messageMap = props.messageMap.map(item => <Message message={item.message}/>)
    return (
        <div className={dialogsStyle.dialogs_block}>
            <div className={dialogsStyle.scope}>
                <ul>
                    {dialogMap}
                </ul>
            </div>

            <div className={dialogsStyle.messages}>
                {messageMap}
                <div className={dialogsStyle.sendMessage}>
                    <textarea onChange={props.onChangeMessage} placeholder="Send Message" value={props.textAreaDialog}>
                    </textarea>
                    <button onClick={props.addMessage} className="button button-message">send</button>
                </div>
            </div>
        </div>
    )
}

export default DialogsBlock;