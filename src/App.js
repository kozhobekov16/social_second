import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Home} from "./components/Home/Home";
const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <div className="App">
          <Header />
          <div className="second-block">
            <Sidebar />
            <div className="wrapper">
              <Route exact path="/" component={Home} />
              <Route
                path="/dialogs"
                render={ () => <Dialogs state={props.state.dialogsPage}/>}
              />
              <Route
                path="/profile"
                render={() => <Profile state={props.state.profilePage} addPost={props.addPost} postMassage={props.state.profilePage.postMassage} changeValuePost={props.changeValuePost}/>}
              />
            </div>
          </div>
        </div>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
