import React from "react";
import "./App.css";
import Header from "./InstagramClone/Header/Header"
// import Story from "./InstagramClone/Story/Story"
// // import Post from "./InstagramClone/Post/Post"
// import SideGrid from "./InstagramClone/SideGrid/SideGrid"
// // import TwoPost from "./InstagramClone/TwoPost/TwoPost"
// import SinglePost from "./InstagramClone/SinglePost/SinglePost"
import Home from "./InstagramClone/Home/Home"
import Explore from "./InstagramClone/Explore/Explore"
import Notification from "./InstagramClone/Notification/Notification"
import Chat from "./InstagramClone/Chat/Chat"
import Profile from "./InstagramClone/Profile/Profile"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"


function App() {
  return (
    <div className="main-app">
      <div className="main-section">
        <div className="container">
          <Router>
            <Header />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/explore"  component={Explore} />
              <Route exact path="/notification" component={Notification} />
              <Route exact path="/chat" component={Chat} />
              <Route exact path="/profile" component={Profile} />
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
};



export default App;