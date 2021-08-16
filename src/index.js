import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from './components/Redux/store'
import { BrowserRouter } from "react-router-dom";
let entireRender = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()} addPost={store.addPost.bind(store)} changeValuePost={store.changeValuePost.bind(store)} />
        </BrowserRouter>,
        document.getElementById("root")
    );
}
store.subscribe(entireRender)

entireRender()