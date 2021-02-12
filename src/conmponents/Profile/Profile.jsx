import profileStyle from "./Profile.module.css";
import AccountUser from "./AccountUser";
import React from "react"
import Post from "./myPosts/Post";

const Profile = (props) => {
    return (
        <section>
            <div>
                <AccountUser/>
            </div>
            <div className={profileStyle.position}>
                <div>
                    <h1>My Posts</h1>
                    <textarea placeholder="What's new ?" onChange={props.changeText} value={props.newPostText}>
          </textarea>
                    <div className={profileStyle.comment_post}>
                        <button onClick={props.addNewPost} className="button">send</button>
                    </div>
                </div>
                <Post postInfo={props.postInfo}/>
            </div>
        </section>
    );
};

export default Profile;