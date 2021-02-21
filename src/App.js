import './App.css';
import HeaderComponentAuth from './conmponents/Header/HeaderComponentAPI';
import ProfileContainer from './conmponents/Profile/ProfileContainer';
import SidebarContainer from './conmponents/Sidebar/SidebarContainer';
import DialogsBlockContainer from "./conmponents/Dialogs/DialogsBlockContainer";
import UsersBlockContainer from "./conmponents/Users/UsersBlockContainer";
import {Route, BrowserRouter} from "react-router-dom";
import LoginBlockComponent from "./conmponents/Login/LoginBlockComponent";
import {Component} from "react";
import {connect} from "react-redux";
import Preloader from "./conmponents/Users/Preloader/Preloader";
import {initializeApp} from "./redux/appReduser";


class AppComponent extends Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialize) return <Preloader/>
        return (
            <BrowserRouter>
                <div className="application">
                    <HeaderComponentAuth/>
                    <SidebarContainer/>
                    <div className="content">
                        <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                        <Route path="/dialogs" render={() => <DialogsBlockContainer/>}/>
                        <Route path="/users" render={() => <UsersBlockContainer/>}/>
                        <Route path="/login" render={() => <LoginBlockComponent/>}/>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

const mapStateToProps = (state) => ({
    initialize: state.initialize.initialize
})
const App = connect(mapStateToProps, {initializeApp})(AppComponent)
export default App
