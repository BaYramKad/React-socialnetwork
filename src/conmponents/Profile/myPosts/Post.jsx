import postStyle from "./Post.module.css";

const Post = (props) => {

    return (
        <div>
            {
                props.postInfo.map(item => (
                    <div className={postStyle.post}>
                        <img className={postStyle.post_avatar} src={item.postImg} alt="userAvatar"/>
                        <div>
                            <h4 className={postStyle.user_name}>{item.nameUser}</h4>
                            <p className={postStyle.item}>{item.postText}</p>
                            <div className={postStyle.button_post}>
                                <button className={postStyle.button_post_like}>
                                    <img className={postStyle.like} src={item.imgLike} alt="like"/>
                                    <span>{item.countLike}</span>
                                </button>
                                <button className={postStyle.button_post_dislike}>
                                    <img className={postStyle.dislike} src={item.imgDisLike} alt="dislike"/>
                                    <span>{item.countDislike}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default Post;