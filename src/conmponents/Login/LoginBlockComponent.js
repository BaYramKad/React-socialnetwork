import React from "react"
import {connect} from "react-redux";
import {loginFormMe, loginOutFormMe} from "../../redux/authMeReduser";
import {Redirect} from "react-router-dom";
import {getIsAuth} from "../../Selector/loginPageSelector";
import {LoginReduxForm} from "./LoginComponent";

class LoginBlockComponent extends React.Component {
    onSubmit = (formData) => {
        this.props.loginFormMe(formData.email, formData.password, formData.rememberMe)
    }

    render() {
        if (this.props.isAuth) return <Redirect to="/profile"/>
        return <div>
            <div><h1>Login</h1></div>
            <LoginReduxForm {...this.props} onSubmit={this.onSubmit}/>
        </div>
    }
}

const mapSateToProps = (state) => ({
    isAuth: getIsAuth(state)
})
export default connect(mapSateToProps, {loginFormMe, loginOutFormMe})(LoginBlockComponent)