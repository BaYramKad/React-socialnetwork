import sidebarStyle from "./Sidebar.module.css";
import {NavLink} from "react-router-dom";
import MayFriends from "./MayFriends";

const Sidebar = (props) => {
    const mayFriend = props.userData.dialogsPage.dialogsItems.map( item => <MayFriends userImage={item.userImage} name={item.name}/> )
    
    return (
        <div>
            <nav className={sidebarStyle.sidebar}>
                <ul>
                    <li><NavLink className={sidebarStyle.item} activeClassName={sidebarStyle.active} to="/profile">Profile</NavLink></li>
                    <li><NavLink className={sidebarStyle.item} activeClassName={sidebarStyle.active} to="/dialogs">Messages</NavLink></li>
                    <li><NavLink className={sidebarStyle.item} activeClassName={sidebarStyle.active} to="/news">News</NavLink></li>
                    <li><NavLink className={sidebarStyle.item} activeClassName={sidebarStyle.active} to="/music">Music</NavLink></li>
                </ul>
                <div><NavLink className={sidebarStyle.item} activeClassName={sidebarStyle.active} to="/setings">Settings</NavLink></div>
            </nav>
            <div className={sidebarStyle.friends_block}>
                <div className={sidebarStyle.str_friend}>Друзья</div>
                <div className={sidebarStyle.friends}>
                    {mayFriend}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;