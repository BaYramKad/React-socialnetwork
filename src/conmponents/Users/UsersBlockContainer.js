import {connect} from "react-redux";
import Users from "./Users";
import {thunkFolow, thunkUnFolow, toggleThunkIsFetching, toggleThunkIsPage} from "../../redux/usersReduser";
import * as React from "react";
import withOrderComponent from "../Redirect/RedirectComponent";
import {compose} from "redux";

class UsersAPIConnect extends React.Component {
    componentDidMount() {
        this.props.toggleThunkIsFetching(this.props.countUser, this.props.currentPage)
    }

    onPageChanged = (currentPage) => {
        this.props.toggleThunkIsPage(this.props.countUser, currentPage)
    }

    render() {
        return <Users {...this.props} onPageChanged={this.onPageChanged}/>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        countUser: state.usersPage.countUser,
        currentPage: state.usersPage.currentPage,
        preloader: state.usersPage.preloader,
        disableProgress: state.usersPage.disableProgress
    }
}

export default compose(
    connect(mapStateToProps, {
        toggleThunkIsFetching,
        toggleThunkIsPage,
        thunkFolow,
        thunkUnFolow
    }),
    withOrderComponent
)(UsersAPIConnect)