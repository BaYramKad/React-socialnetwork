import {Redirect} from "react-router-dom";
import React from "react"
import {connect} from "react-redux";
const withOrderComponent = (Component) => {

    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to="/login"/>
            return <Component {...this.props} />
        }
    }
    const mapStateToPropsAuth = (state) => {
        return {
            isAuth: state.auth.isAuth,
        }
    }

    const HightOrderComponent = connect(mapStateToPropsAuth)(RedirectComponent)
    return HightOrderComponent
}

export default withOrderComponent