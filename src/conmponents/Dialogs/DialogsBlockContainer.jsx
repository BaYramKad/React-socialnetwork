import React from "react"
import {addMessage} from "../../redux/dialogsReduser";
import DialogsBlock from "./DialogsBlock";
import {connect} from "react-redux";
import withOrderComponent from "../Redirect/RedirectComponent";
import {getDialogsItems, getMessages, getTextPost} from "../../Selector/dialogsBlockSelector";

class getDialogsComponent extends React.Component {
    render() {
        return <DialogsBlock {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        dialogMap: getDialogsItems(state),
        messageMap: getMessages(state),
        textAreaDialog: getTextPost(state),
    }
}

const HightOrderComponent = withOrderComponent(getDialogsComponent)
export default connect(mapStateToProps, {addMessage})(HightOrderComponent)