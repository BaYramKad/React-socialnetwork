import {NavLink} from "react-router-dom";
import dialogStyle from "./dialogStyle.module.css";

const Dialog = (props) => {
    return (
        <li>
            <NavLink className={dialogStyle.dialog} activeClassName={dialogStyle.active}
                     to={props.id}> <img className={dialogStyle.userAvatar} src={props.userImage} alt=""/>{props.name}</NavLink>
        </li>
    )
}

export default Dialog;