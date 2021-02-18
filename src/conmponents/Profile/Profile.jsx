import profileStyle from "./Profile.module.css";
import AccountUser from "./AccountUser";
import React from "react"
import Post from "./myPosts/Post";
import Preloader from "../Users/Preloader/Preloader";
import {updateTextProfile} from "../../redux/profileReduser";

class Profile extends React.Component{


    render() {
        if (!this.props.userData) {
            return <Preloader/>
        }
        return (
            <section>
                <div>
                    <AccountUser {...this.props.userData} status={this.props.status} changeProfileStatus={this.props.changeProfileStatus}
                                 updateStatusProfile={this.props.updateStatusProfile}/>
                </div>
                <div className={profileStyle.position}>
                    <div>
                        <h1>My Posts</h1>
                        <textarea className={profileStyle.postTextAria} placeholder="What's new ?" onChange={this.props.changeText} value={this.props.newPostText}>
                            </textarea>
                        <div className={profileStyle.comment_post}>
                            <button onClick={this.props.addNewPost} className="button">send</button>
                        </div>
                    </div>
                    <Post postInfo={this.props.postInfo}/>
                </div>
            </section>
        );
    }
};

export default Profile;