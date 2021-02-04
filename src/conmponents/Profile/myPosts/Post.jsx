import postStyle from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={postStyle.post}>
            <img className={postStyle.post_avatar} src={props.postImg} alt="userAvatar" />
            <div>
                <h4 className={postStyle.user_name}>{props.nameUser}</h4>
                <p className={postStyle.item}>{props.postText}</p>
                <div className={postStyle.button_post}>
                    <button onClick={props.countValue} className={postStyle.button_post_like}>
                        <img  className={postStyle.like} src={props.imgLike} alt="like"/>
                        <span>{props.countLike}</span>
                    </button>
                    <button onClick={props.countValue} className={postStyle.button_post_dislike}>
                        <img className={postStyle.dislike} src={props.imgDisLike} alt="dislike"/>
                        <span>{props.countDisLike}</span>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Post;