import './App.css';
import Header from './conmponents/Header/Header';
import ConnectBlockProfile from './conmponents/Profile/ProfileContainer';
import SidebarContainer from './conmponents/Sidebar/SidebarContainer';
import DialogsBlockContainer from "./conmponents/Dialogs/DialogsBlockContainer";
import UsersBlockContainer from "./conmponents/Users/UsersBlockContainer";
import {Route, BrowserRouter} from "react-router-dom";


const App = () => {
    return (
        <BrowserRouter>
            <div className="application">
                <Header/>
                <SidebarContainer />
                <div className="content">
                    <Route path="/profile" render={ () => <ConnectBlockProfile />}/>
                    <Route  path="/dialogs" render={ () => <DialogsBlockContainer />}/>
                    <Route path="/users" render={ () => <UsersBlockContainer />}/>
                </div>
            </div>
        </BrowserRouter>
    )
};

export default App;