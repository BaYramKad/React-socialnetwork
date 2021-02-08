import React from "react"
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import { TYPE_ADD_MESSAGE, TYPE_UPDATE_TEXT_MESSAGE } from "../../redux/dialogsReduser";
import DialogsBlock from "./DialogsBlock";
import {MyContext} from "./../../index"


const DialogsBlockContainer = () => {

    

    return <MyContext.Consumer>
        { (store) => {
            console.log(store);
            const storeAppeal = store.appeal()
            const dialog = storeAppeal.dialogsPage.dialogsItems.map( item => <Dialog userImage={item.userImage} name={item.name} id={`/dialogs/${item.id}`}/> );
            const message = storeAppeal.dialogsPage.messagesItems.map( item => <Message message={item.message}/> );
                    
            const refMessage = React.createRef();
            const addMessage = () => {
                store.dispatch(TYPE_ADD_MESSAGE());
            };
                    
            const onChangeMessage = () => {
                const valueMessage = refMessage.current.value;
                store.dispatch(TYPE_UPDATE_TEXT_MESSAGE(valueMessage))
            }
            
            return <DialogsBlock onChangeMessage={onChangeMessage} addMessage={addMessage} 
            dialogMap={dialog} messageMap={message} refMessage={refMessage}
            textAreaDialog={storeAppeal.dialogsPage.textMessage} />
        }}
    </MyContext.Consumer>
    
    
}

export default DialogsBlockContainer;