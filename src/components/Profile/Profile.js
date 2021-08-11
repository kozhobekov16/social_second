import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={s.profile}>
      <ProfileInfo />
      <MyPosts state={props.state} addPost={props.addPost} postMassage={props.postMassage} changeValuePost={props.changeValuePost}/>
    </div>
  );
};
export default Profile;
