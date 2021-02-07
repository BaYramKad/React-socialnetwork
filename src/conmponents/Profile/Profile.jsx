import Post from "./myPosts/Post";
import profileStyle from "./Profile.module.css";
import AccountUser from "./AccountUser";
import { ADD_POST, UPDATE_TEXT } from "./../../redux/profileReduser";
import React from "react"

const Profile = (props) => {
  const postItems = props.posts().profilePage.postInfo.map(item => <Post
                      imgDisLike={item.imgDisLike}
                      imgLike={item.imgLike}
                      postImg={item.postImg}
                      nameUser={item.nameUser}
                      postText={item.postText}
                      countLike={item.countLike}
                      countDisLike={item.countDislike} />
  )

  const refElement = React.createRef();

  const addNewPost = () => {
    props.dispatch(ADD_POST());
  }

  const changeText = () => {
    const text = refElement.current.value;
    props.dispatch(UPDATE_TEXT(text))
  }

  return (
    <section>
      <div>
        <AccountUser />
      </div>
      <div className={profileStyle.position}>
        <div>
          <h1>My Posts</h1>
          <textarea placeholder="What's new ?" onChange={changeText} ref={refElement} value={props.textArea}></textarea>
          <div className={profileStyle.comment_post}>
            <button onClick={addNewPost} className="button">send</button>
          </div>
        </div>
        {postItems}
      </div>
    </section>
  );
};

export default Profile;