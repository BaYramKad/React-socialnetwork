import {connect} from "react-redux";
import Users from "./Users";
import {setUsersAC, usersFolowAC, usersUnFolowAC} from "../../redux/usersReduser";



const mapStateToProps = (state) => {
    console.log(state.users)
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        folow: (id) => {
            dispatch(usersFolowAC(id))
        },
        unFolow: (id) => {
            dispatch(usersUnFolowAC(id))
        },
        setUsers: (id) => {
            dispatch(setUsersAC(id))
        }
    }
}

const UsersBlockContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersBlockContainer;