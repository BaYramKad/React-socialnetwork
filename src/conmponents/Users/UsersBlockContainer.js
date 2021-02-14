import {connect} from "react-redux";
import Users from "./Users";
import {setPageAC, setUsersAC, usersFolowAC, usersUnFolowAC} from "../../redux/usersReduser";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage
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
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setPage(numPage) {
            dispatch(setPageAC(numPage))
        }

    }
}

const UsersBlockContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersBlockContainer;