import './App.css';
import Header from './conmponents/Header/Header';
import ProfileContainer from './conmponents/Profile/ProfileContainer';
import Sidebar from './conmponents/Sidebar/Sidebar';
import DialogsBlockContainer from "./conmponents/Dialogs/DialogsBlockContainer";
import {Route, BrowserRouter} from "react-router-dom";
const App = (props) => {
    const state = props.store.appeal();
    return (
        <BrowserRouter>
            <div className="application">
                <Header/>
                <Sidebar userData={state}/>
                <div className="content">
                    <Route path="/profile" 
                            render={ () => <ProfileContainer dispatch={props.store.dispatch.bind(props.store)}
                                                    posts={props.store.appeal.bind(props.store)}
                                                    textAreaProfile={state.profilePage.newPostText}/>}/>
                    <Route  path="/dialogs"
                            render={() => <DialogsBlockContainer />}/>
                </div>
            </div>
        </BrowserRouter>
    )
};

export default App;