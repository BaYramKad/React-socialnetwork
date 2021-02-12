import Post from "./myPosts/Post";
import {ADD_POST, UPDATE_TEXT} from "../../redux/profileReduser";
import Profile from "./Profile";
import {connect} from "react-redux";


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

const mapDispatchToProps = (dispatch) => {
    return {
        changeText: function (event) {
            let text = UPDATE_TEXT(event.target.value)
            dispatch(text)
        },
        addNewPost: function () {
            dispatch(ADD_POST())
        }
    }
}

const mapStateToProps = (state) => {
    return {
        postInfo: state.profile.postInfo,
        newPostText: state.profile.newPostText
    }
}


const ConnectBlockProfile = connect(mapStateToProps, mapDispatchToProps)(Profile)
export default ConnectBlockProfile;