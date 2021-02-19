import React from "react"
import logitStyle from "./loginStyle.module.css"
import {Field, reduxForm} from "redux-form";
import {Input, TextAria} from "../../validate/ShowValidate";
import {maxLenght10, requireForm} from "../../validate/validateForm";


class LoginBlockComponent extends React.Component {
    onSubmit(formData) {
        console.log(formData)
    }

    render() {
        return <div>
            <div><h1>Login</h1></div>
            <LoginReduxForm onSubmit={this.onSubmit}/>
        </div>
    }
}

class Form extends React.Component {
    render() {
        const maxLengthPassword = maxLenght10(8)
        return <div className={logitStyle.form}>
            <form onSubmit={this.props.handleSubmit} className={logitStyle.input} action="">
                <Field name="login" component={Input} validate={[requireForm]} placeholder={"Login"} type="login"/>
                <Field name="email" component={Input} validate={[requireForm]} placeholder={"E-mail"} type="email"/>
                <Field name="password" component={Input} validate={[requireForm, maxLengthPassword]}
                       placeholder={"Password"} type="password"/>
                <div>
                    <Field name="checkbox" component="input" type="checkbox"/>
                    <small>remember me</small>
                </div>

                <div>
                    <button className="button">Submit</button>
                </div>
            </form>
        </div>
    }
}

const LoginReduxForm = reduxForm({form: 'Login'})(Form)
export default LoginBlockComponent