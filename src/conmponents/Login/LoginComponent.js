import {maxLenght10, requireForm} from "../../validate/validateForm";
import logitStyle from "./loginStyle.module.css";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../validate/ShowValidate";

const Form = ({handleSubmit, error}) => {
    let maxLengthPassword = maxLenght10(20)
    return <div className={logitStyle.form}>
        <form onSubmit={handleSubmit} className={logitStyle.input} action="">
            <Field name="login" component={Input} validate={[requireForm]} placeholder={"Login"} type="login"/>
            <Field name="email" component={Input} validate={[requireForm]} placeholder={"E-mail"}/>
            <Field name="password" component={Input}
                   validate={[requireForm, maxLengthPassword]}
                   placeholder={"Password"} type="password"/>
            <div>
                <Field name="checkbox" component="input" type="checkbox"/>
                <small>remember me</small>
            </div>

            <div>
                <div className={logitStyle.styleError}>
                    {error && <small>{error}</small>}
                </div>
                <div className={logitStyle.buttonBlock}>
                    <button className="button">Submit</button>
                </div>
            </div>
        </form>
    </div>
}

export const LoginReduxForm = reduxForm({form: 'Login'})(Form);