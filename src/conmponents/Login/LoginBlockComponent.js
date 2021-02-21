import React from "react"
import logitStyle from "./loginStyle.module.css"
import {Field, reduxForm} from "redux-form";
import {Input} from "../../validate/ShowValidate";
import {maxLenght10, requireForm} from "../../validate/validateForm";
import {connect} from "react-redux";
import {loginFormMe, loginOutFormMe} from "../../redux/authMeReduser";
import {Redirect} from "react-router-dom";
import {getIsAuth} from "../../Selector/loginPageSelector";


class LoginBlockComponent extends React.Component {
    onSubmit = (formData) => {
        this.props.loginFormMe(formData.email, formData.password, formData.rememberMe)
    }

    render() {
        if (this.props.isAuth) return <Redirect to="/profile"/>
        return <div>
            <div><h1>Login</h1></div>
            <LoginReduxForm onSubmit={this.onSubmit} onLogoutMe={this.onLogoutMe}/>
        </div>
    }
}

class Form extends React.Component {
    render() {

        // let maxLengthPassword = maxLenght10(30)
        return <div className={logitStyle.form}>
            <form onSubmit={this.props.handleSubmit} className={logitStyle.input} action="">
                {/*<Field name="login" component={Input} validate={[requireForm]} placeholder={"Login"} type="login"/>*/}
                <Field name="email" component={Input} validate={[requireForm]} placeholder={"E-mail"}/>
                <Field name="password" component={Input}
                       validate={[requireForm]}
                       placeholder={"Password"} type="password"/>
                <div>
                    <Field name="checkbox" component="input" type="checkbox"/>
                    <small>remember me</small>
                </div>

                <div>
                    <div className={logitStyle.styleError}>
                        {this.props.error && <small>{this.props.error}</small>}
                    </div>
                    <div className={logitStyle.buttonBlock}>
                        <button className="button">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    }
}

const LoginReduxForm = reduxForm({form: 'Login'})(Form);
const mapSateToProps = (state) => ({
    isAuth: getIsAuth(state)
})

export default connect( mapSateToProps,{loginFormMe, loginOutFormMe})(LoginBlockComponent)