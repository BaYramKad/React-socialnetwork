import headStyle from "./Header.module.css";
import logoImg from "../../logo.svg"
const Header = () => {
    return (
        <header className={headStyle.header}>
            <img src={logoImg}/>
        </header>
    )
}

export default Header;