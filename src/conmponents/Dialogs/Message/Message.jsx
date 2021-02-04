import messageStyle from "./messageStyle.module.css";

const Message = (props) => {
    return (
        <div>
            <div className={messageStyle.message}>{props.message}</div>
        </div>
    )
}

export default Message;