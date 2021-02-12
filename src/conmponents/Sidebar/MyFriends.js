import sidebarStyle from "./Sidebar.module.css";

const MyFriends = (props) => {
    return (
        <div>
            <img className={sidebarStyle.friendAvatar} src={props.userImage}/>
            <a className={sidebarStyle.name}>{props.name}</a>
        </div>
    )
}

export default MyFriends