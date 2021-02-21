import * as React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {connectThunkUserMe, getUserPhoto, loginOutFormMe} from "../../redux/authMeReduser";
import {withRouter} from "react-router";
import {getIsAuth} from "../../Selector/loginPageSelector";
import {getUserId} from "../../Selector/profilePageSelector";
import {getEmail, getLogin, getPhoto} from "../../Selector/headerSelector";

class HeaderComponentAuth extends React.Component {

    componentDidMount() {
        this.props.connectThunkUserMe()
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.id
        }
        this.props.getUserPhoto(userId)
    }

    render() {
        return <Header {...this.props} />
    }
}

const matStateToProps = (state) => {
    return {
        email: getEmail(state),
        id: getUserId(state),
        login: getLogin(state),
        isAuth: getIsAuth(state),
        photoUser: getPhoto(state)
    }
}

const HeaderComponenUseRouter = withRouter(HeaderComponentAuth)
export default connect(matStateToProps, {connectThunkUserMe, getUserPhoto, loginOutFormMe})(HeaderComponenUseRouter)