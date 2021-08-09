import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";
const MyPosts = (props) => {
  const postElem = props.state.posts.map(item => <section>{` ${item.id} ${item.massage} ${item.likes}`}</section>)
  // const post = {
  //   posts: [
  //     { id: 1, massage: "Hey, how are you", likes: 15 },
  //     { id: 2, massage: "What are doing?", likes: 15 },
  //     { id: 2, massage: "What d doing?", likes: 15 },
  //   ],
  // }
  // let arr = post.posts.map(elem => <p>{elem.id} {elem.massage} {elem.likes}</p>)
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
        <button onClick={props.addPost}>Add post</button>
      </div>
      <section className={s.posts}>{postElem}</section>
    </div>
  );
};
export default MyPosts;
