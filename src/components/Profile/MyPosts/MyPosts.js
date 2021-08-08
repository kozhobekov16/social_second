import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";
const MyPosts = (props) => {
  let postElements = props.state.map((elem) => <Post massage={elem.massage} />);

  let newMassagePost = React.createRef();
  let addPost = () => {
    let text = newMassagePost.current.value;
    alert(text);
  };
  return (
    <div>
      <h3>My posts</h3>
      <div>
        <input ref={newMassagePost} />
        <button onClick={addPost}>Add post</button>
      </div>
      <section className={s.posts}>{postElements}</section>
    </div>
  );
};
export default MyPosts;
