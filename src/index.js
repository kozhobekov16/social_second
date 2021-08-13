import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import state, { addPost, changeValuePost, subscribe } from './components/Redux/state'
import { BrowserRouter } from "react-router-dom";
let entireRender = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} changeValuePost={changeValuePost} />
        </BrowserRouter>,
        document.getElementById("root")
    );
}
subscribe(entireRender)

entireRender()