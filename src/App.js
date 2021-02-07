import './App.css';
import Header from './conmponents/Header/Header';
import Profile from './conmponents/Profile/Profile';
import Sidebar from './conmponents/Sidebar/Sidebar';
import DialogsBlock from "./conmponents/Dialogs/DialogsBlock";
import {Route, BrowserRouter} from "react-router-dom";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="application">
                <Header/>
                <Sidebar userData={props.store.appeal()}/>
                <div className="content">
                    <Route path="/profile" 
                            render={ () => <Profile dispatch={props.store.dispatch.bind(props.store)}
                                                    posts={props.store.appeal.bind(props.store)}
                                                    textArea={props.store.appeal().profilePage.newPostText}/>}/>

                    <Route  path="/dialogs"
                            render={() => <DialogsBlock dialogsItems={props.store.appeal().dialogsPage.dialogsItems}
                                            messagesItems={props.store.appeal().dialogsPage.messagesItems}
                                            dispatch={props.store.dispatch.bind(props.store)}
                                            textAreaDialog={props.store.appeal().dialogsPage.textMessage}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;