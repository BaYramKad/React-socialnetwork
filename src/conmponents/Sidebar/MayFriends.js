import sidebarStyle from "./Sidebar.module.css";


const mayFriends = (props) => {
    return (
        <div>
            <img className={sidebarStyle.friendAvatar} src={props.userImage}/>
            <a className={sidebarStyle.name}>{props.name}</a>
        </div>
    )
}

export default mayFriends;