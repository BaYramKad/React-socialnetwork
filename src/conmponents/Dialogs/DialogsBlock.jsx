import dialogsStyle from "./DialogsBlock.module.css";
import React from "react"
const DialogsBlock = (props) => {
    return (
        <div className={dialogsStyle.dialogs_block}>
            <div className={dialogsStyle.scope}>
                <ul>
                    { props.dialogMap }
                </ul>
            </div>
            
            <div className={dialogsStyle.messages}>
                { props.messageMap }
                <div className={dialogsStyle.sendMessage}>
                    <textarea onChange={props.onChangeMessage} placeholder="Send Message"
                        value={props.textAreaDialog} ref={props.refMessage}></textarea>
                    <button onClick={props.addMessage} className="button button-message">send</button>
                </div>
            </div>
        </div>
    )
}

export default DialogsBlock;