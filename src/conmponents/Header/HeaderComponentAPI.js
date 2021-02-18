import * as React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {connectThunkUserMe, getUserPhoto} from "../../redux/authMeReduser";
import {withRouter} from "react-router";

class HeaderComponentAuth extends React.Component {
    componentDidMount() {
        this.props.connectThunkUserMe()
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserPhoto(userId)
    }

    render() {
        return <Header {...this.props} />
    }
}

const matStateToProps = (state) => {
    return {
        email: state.auth.email,
        id: state.auth.id,
        login: state.auth.login,
        isAuth: state.auth.isAuth,
        photoUser: state.auth.photoUser
    }
}

const HeaderComponenUseRouter = withRouter(HeaderComponentAuth)

export default connect(matStateToProps, {connectThunkUserMe, getUserPhoto})(HeaderComponenUseRouter)