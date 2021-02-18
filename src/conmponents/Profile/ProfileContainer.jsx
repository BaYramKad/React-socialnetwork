import {
    addNewPost,
    changeText,
    getProfileStatus,
    getProfileThunk,
    updateProfileStatus,
    changeProfileStatus, updateStatusProfile
} from "../../redux/profileReduser";
import Profile from "./Profile";
import {connect} from "react-redux";
import * as React from "react";
import {withRouter} from "react-router";
import withOrderComponent from "../Redirect/RedirectComponent";
import {compose} from "redux";


// import { MyContext } from "../..";
// const ProfileContainer = () => {
//   return <MyContext.Consumer>
//     { store => {
//       const storeAppeal = store.appeal()
//       const postItems = storeAppeal.profilePage.postInfo.map(item => <Post
//         imgDisLike={item.imgDisLike} imgLike={item.imgLike}
//         postImg={item.postImg} nameUser={item.nameUser}
//         postText={item.postText} countLike={item.countLike}
//         countDisLike={item.countDislike} />
//       )
//       const addNewPost = () => {
//         store.dispatch(ADD_POST());
//       }
//       const changeText = (e) => {
//         store.dispatch(UPDATE_TEXT(e.target.value))
//       }
//       return <Profile changeText={ changeText } addNewPost={ addNewPost } postItems={ postItems } 
//       textAreaProfile={ storeAppeal.profilePage.newPostText }/> 
//     }}
//   </MyContext.Consumer
// };


class ProfileComponentAPI extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getProfileThunk(userId)
        this.props.getProfileStatus(userId)
    }

    changeText(event) {
        this.props.changeText(event.target.value)
    }


    render() {
        return <Profile {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        postInfo: state.profile.postInfo,
        newPostText: state.profile.newPostText,
        userData: state.profile.userData,
        status: state.profile.status,
    }
}

export default compose(
    connect(mapStateToProps, {changeText, getProfileThunk, getProfileStatus, changeProfileStatus,updateStatusProfile, addNewPost}),
    withRouter,
    withOrderComponent
)(ProfileComponentAPI)