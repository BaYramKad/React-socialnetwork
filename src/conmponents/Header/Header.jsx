import headStyle from "./Header.module.css";
import logoImg from "../../logo.svg"
import logodefault from "./../../img/userAvatar/user.png"
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={headStyle.header}>
            <div>
                <img className={headStyle.headerLogo} src={logoImg}/>
            </div>
            <div>
                {props.isAuth
                    ? <div className={headStyle.userAvatar}>
                        <strong className={headStyle.userLogin}>{props.login}</strong>
                        <img className={headStyle.userImg} src={props.photoUser || logodefault} alt=""/>
                        <button onClick={props.loginOutFormMe} className="button">Log Out</button>
                    </div>

                    : <NavLink className={headStyle.sing_button} to="/login">
                        <button className="button">Sign In</button>
                    </NavLink>}
            </div>
        </header>
    )
}

export default Header;

/*
*
* profile:
newPostText: ""
postInfo: (3) [{…}, {…}, {…}]
userData:
aboutMe: "я круто чувак 1001%"
contacts: {facebook: "facebook.com", website: null, vk: "vk.com/dimych", twitter: "https://twitter.com/@sdf", instagram: "instagra.com/sds", …}
fullName: "samurai dimych"
lookingForAJob: true
lookingForAJobDescription: "не ищу, а дурачусь"
photos:
large: "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
small: "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0"
*
* */