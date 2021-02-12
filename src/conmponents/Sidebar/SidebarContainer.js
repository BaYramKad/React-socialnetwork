
import {connect} from "react-redux";
import Sidebar from "./Sidebar";

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogs.dialogsItems
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        test: 1
    }
}

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar)
export default SidebarContainer;