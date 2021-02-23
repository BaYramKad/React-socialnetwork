import messageStyle from "./messageStyle.module.css";

const Message = (props) => {
    return (
        <li key={props.idkey}>
            <div className={messageStyle.message}>{props.message}</div>
        </li>
    )
}

export default Message;