import profileStyle from "./Profile.module.css";
import AccountUser from "./AccountUser";
import React from "react"
import Post from "./myPosts/Post";
import Preloader from "../Users/Preloader/Preloader";
import {Field, reduxForm} from "redux-form";
import {requireForm} from "../../validate/validateForm"

const Profile = (props) => {

    const onSubmit = (postText) => {
        props.addNewPost(postText.postText)
    }

    if (!props.userData) {
        return <Preloader/>
    }
    return (
        <section>
            <div>
                <AccountUser {...props.userData} status={props.status}
                             changeProfileStatus={props.changeProfileStatus}
                             updateStatusProfile={props.updateStatusProfile}/>
            </div>
            <div className={profileStyle.position}>
                <div>
                    <h1 className={profileStyle.title}>My Posts</h1>
                    <ProfilePostReduxForm {...props} onSubmit={onSubmit}/>
                </div>
                <Post postInfo={props.postInfo}/>
            </div>
        </section>
    );
}

const ProfilePost = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field component="textarea" type="text" name="postText" className={profileStyle.postTextAria}
               placeholder="What's new ?"
                validate={[requireForm]}> </Field>
        <div className={profileStyle.comment_post}>
            <button className="button">send</button>
        </div>
    </form>
}

const ProfilePostReduxForm = reduxForm({form: "ProfilePost"})(ProfilePost)
export default Profile;