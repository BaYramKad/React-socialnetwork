import usersStyle from "../usersStyle.module.css";
import preloader from "../../../img/preloader/preloader.svg";

const Preloader = (props) => {
    return <div className={usersStyle.title}>
        <img className={usersStyle.preloader} src={props.preloader && preloader} style={ props.preloader ? {display: "flex" } : {display: "none" }  } alt=""/>
    </div>
}

export default Preloader