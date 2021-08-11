import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import state, { addPost, changeValuePost } from './components/Redux/state'
export let entireRender = () =>{
ReactDOM.render(
  <React.StrictMode>
    <App state={state} addPost={addPost} changeValuePost={changeValuePost}/>
  </React.StrictMode>,
  document.getElementById("root")
);
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
