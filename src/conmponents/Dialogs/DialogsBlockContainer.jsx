import React from "react"
import {TYPE_ADD_MESSAGE, TYPE_UPDATE_TEXT_MESSAGE} from "../../redux/dialogsReduser";
import DialogsBlock from "./DialogsBlock";
import {connect} from "react-redux";

// const DialogsBlockContainer = () => {

//     return <MyContext.Consumer>
//         { (store) => {
//             console.log(store);
//             const storeAppeal = store.appeal()
//             const dialog = storeAppeal.dialogsPage.dialogsItems.map( item => <Dialog userImage={item.userImage} name={item.name} id={`/dialogs/${item.id}`}/> );
//             const message = storeAppeal.dialogsPage.messagesItems.map( item => <Message message={item.message}/> );
//             const addMessage = () => {
//                 store.dispatch(TYPE_ADD_MESSAGE());
//             };
//             const onChangeMessage = (e) => {
//                 store.dispatch(TYPE_UPDATE_TEXT_MESSAGE(e.target.value))
//             }
//             return <DialogsBlock onChangeMessage={onChangeMessage} addMessage={addMessage}
//             dialogMap={dialog} messageMap={message}
//             textAreaDialog={storeAppeal.dialogsPage.textMessage} />
//         }}
//     </MyContext.Consumer>
// }

const mapStateToProps = (state) => {
    return {
        dialogMap: state.dialogs.dialogsItems,
        messageMap: state.dialogs.messagesItems,
        textAreaDialog: state.dialogs.textMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeMessage: (e) => {
            dispatch(TYPE_UPDATE_TEXT_MESSAGE(e.target.value))
        },
        addMessage: () => {
            dispatch(TYPE_ADD_MESSAGE())
        }
    }
}

const DialogsBlockContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsBlock)
export default DialogsBlockContainer;