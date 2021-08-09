const state = {
  profilePage: {
    posts: [
      { id: 1, massage: "Hey, how are you", likes: 15 },
      { id: 2, massage: "What are doing?", likes: 10 },
      { id: 3, massage: "What d doing?", likes: 11 },
    ],
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

export const addPost = (newPost) => {
  let newMassage = {
    id: 4, 
    massage: newPost, 
    likes: 13
  }
  state.profilePage.posts.push(newMassage)
}
export default state;
