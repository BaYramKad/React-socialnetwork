import profileStyle from "./Profile.module.css";
import AccountUser from "./AccountUser";
import React from "react"

const Profile = (props) => {
  return (
    <section>
      <div>
        <AccountUser />
      </div>
      <div className={profileStyle.position}>
        <div>
          <h1>My Posts</h1>
          <textarea placeholder="What's new ?" onChange={props.changeText} ref={props.refProfile} value={props.textAreaProfile}></textarea>
          <div className={profileStyle.comment_post}>
            <button onClick={props.addNewPost} className="button">send</button>
          </div>
        </div>
        {props.postItems}
      </div>
    </section>
  );
};

export default Profile;