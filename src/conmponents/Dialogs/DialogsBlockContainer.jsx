import React from "react"
import {addMessage, updateTextMessage} from "../../redux/dialogsReduser";
import DialogsBlock from "./DialogsBlock";
import {connect} from "react-redux";
import withOrderComponent from "../Redirect/RedirectComponent";
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
class getDialogsComponent extends React.Component {
    render() {
        return <DialogsBlock {...this.props} />
    }
}
const mapStateToProps = (state) => {
    return {
        dialogMap: state.dialogs.dialogsItems,
        messageMap: state.dialogs.messagesItems,
        textAreaDialog: state.dialogs.textMessage,
        isAuth: state.auth.isAuth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onChangeMessage: (e) => {
            const text = e.target.value
            dispatch(updateTextMessage(text))
        },
        addMessage: () => {
            dispatch(addMessage())
        }
    }
}
// Hight Order Component
const HightOrderComponent = withOrderComponent(getDialogsComponent)

export default connect(mapStateToProps, mapDispatchToProps)(HightOrderComponent)