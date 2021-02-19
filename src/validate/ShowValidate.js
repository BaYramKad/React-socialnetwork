import React from "react";
import showValidate from "./showValidate.module.css";

export const FormControl = ({input, meta: {touched, error, child, warning}, ...props}) => {
    return <div>
        <div className={touched && error && showValidate.error}>
            {touched && error && <small>{error}</small>}
            {props.children}

        </div>
    </div>
}

export const Input = (props) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props}><input className={showValidate.inputError} {...input} {...restProps}/></FormControl>
}

export const TextAria = (props) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props}><textarea className={showValidate.default} {...input} {...restProps}/></FormControl>
}
