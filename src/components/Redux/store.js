let store = {
   _state: {
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
  },
  getState(){
    return this._state
  },
  addPost() {
    let newMassage = {
      id: 4, 
      massage: this._state.profilePage.postMassage, 
      likes: 13
    }
    this._state.profilePage.posts.push(newMassage)
    this.entireRender(this._state)
  },
  changeValuePost(newValueMassage) {
    this._state.profilePage.postMassage  = newValueMassage
    this.entireRender(this._state)
  } ,
  subscribe(observer) {
    this.entireRender = observer
  },
  entireRender () {
    console.log('render')
  }
}

export default store;
