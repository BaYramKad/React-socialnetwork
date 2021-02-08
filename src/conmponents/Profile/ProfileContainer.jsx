import Post from "./myPosts/Post";
import { ADD_POST, UPDATE_TEXT } from "../../redux/profileReduser";
import React from "react"
import Profile from "./Profile";
import { MyContext } from "../..";

const ProfileContainer = () => {

  return <MyContext.Consumer>
    { store => {
      const storeAppeal = store.appeal()
      const postItems = storeAppeal.profilePage.postInfo.map(item => <Post
        imgDisLike={item.imgDisLike} imgLike={item.imgLike}
        postImg={item.postImg} nameUser={item.nameUser}
        postText={item.postText} countLike={item.countLike}
        countDisLike={item.countDislike} />
      )

      const refProfile = React.createRef();

      const addNewPost = () => {
        store.dispatch(ADD_POST());
      }

      const changeText = () => {
      const text = refProfile.current.value;
        store.dispatch(UPDATE_TEXT(text))
      }
      return <Profile changeText={ changeText } addNewPost={ addNewPost } refProfile={ refProfile } postItems={ postItems } 
      textAreaProfile={ storeAppeal.profilePage.newPostText }/> 
    }}

  </MyContext.Consumer>
  
  
  
};

export default ProfileContainer;