import dialogsStyle from "./DialogsBlock.module.css";
import React from "react"
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {maxLenght10, requireForm} from "../../validate/validateForm";
import {TextAria} from "../../validate/ShowValidate";

const DialogsBlock = (props) => {
    const dialogMap = props.dialogMap.map(item => <Dialog userImage={item.userImage} name={item.name} id={`/dialogs/${item.id}`}/>)
    const messageMap = props.messageMap.map(item => <Message message={item.message}/>)

    const onSubmit = (text) => {
        props.addMessage(text.messaggeText)
    }

    return (<div className={dialogsStyle.dialogs_block}>
            <div className={dialogsStyle.scope}>
                <ul>
                    {dialogMap}
                </ul>
            </div>
            <div className={dialogsStyle.messages}>
                {messageMap}
                <SendMessageReduxForm {...props} onSubmit={onSubmit}/>
            </div>
        </div>)
}


const maxLenght = maxLenght10(30)
const SendMessage = (props) => {
    return <form onSubmit={props.handleSubmit} className={dialogsStyle.sendMessage}>
        <Field name="messaggeText" component={TextAria}
               type="text" placeholder="Send Message" validate={[requireForm, maxLenght]}>
        </Field>
        <button className="button button-message">send</button>
    </form>
}
const SendMessageReduxForm = reduxForm({form: "Message"})(SendMessage)
export default DialogsBlock;