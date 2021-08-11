import { entireRender } from "../../render";

const state = {
  profilePage: {
    posts: [
      { massage: "Hey, how are you", likes: 15 },
      { massage: "What are doing?", likes: 10 },
      { massage: "What d doing?", likes: 11 },
    ],
    postMassage: ''
  },
  dialogsPage: {
    data: [
      { name: "Zhakshylyk", id: 1 },
      { name: "Argen", id: 2 },
    ],
    massages: [
      { massages: "Hello, how are you" },
      { massages: "What do you do?" },
    ],
  },
};

export const addPost = () => {
  let newMassage = {
    id: 4, 
    massage: state.profilePage.postMassage, 
    likes: 13
  }
  state.profilePage.posts.push(newMassage)
  entireRender()
}
export const changeValuePost = (newValueMassage) =>{
  state.profilePage.postMassage  = newValueMassage
  entireRender()
} 
export default state;
