import {connect} from "react-redux";
import Users from "./Users";
import {thunkFolow, thunkUnFolow, toggleThunkIsFetching, toggleThunkIsPage} from "../../redux/usersReduser";
import * as React from "react";
import {compose} from "redux";
import {
    disableProgress,
    getCountUser,
    getCurrentPage,
    getPreloader,
    getTotalUsersCount,
    getUsersPage
} from "../../Selector/usersPageSelector";

class UsersAPIConnect extends React.Component {
    componentDidMount() {
        this.props.toggleThunkIsFetching(this.props.countUser, this.props.currentPage)
    }

    onPageChanged = (currentPage) => {
        this.props.toggleThunkIsPage(this.props.countUser, currentPage)
    }

    render() {
        console.log("RENDER")
        return <Users {...this.props} onPageChanged={this.onPageChanged}/>
    }
}

const mapStateToProps = (state) => {
    console.log("MAPSTATE TO PROPS")
    return {
        users: getUsersPage(state),
        totalUsersCount: getTotalUsersCount(state),
        countUser: getCountUser(state),
        currentPage: getCurrentPage(state),
        preloader: getPreloader(state),
        disableProgress: disableProgress(state)
    }
}

export default compose(
    connect(mapStateToProps, {
        toggleThunkIsFetching,
        toggleThunkIsPage,
        thunkFolow,
        thunkUnFolow
    })
)(UsersAPIConnect)