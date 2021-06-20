import React from "react";
import "./index.css";


//imported components
import Header from "./InstagramClone/Header/Header"
import Home from "./InstagramClone/Home/Home"
import Explore from "./InstagramClone/Explore/Explore"
import Chat from "./InstagramClone/Chat/Chat"
import Profile from "./InstagramClone/Profile/Profile"

// imported packages
import {BrowserRouter as Router, Route, Switch, withRouter} from "react-router-dom"


function App() {
  return (
    <section className="main-app">
      <Router>
        <MainComponent />
      </Router>
    </section>
  );
};




const MainComponent = withRouter(({ location, history, match }) => (
  <>
    <Switch>
      <>
        <Route exact path="/" component={Home} />
        <Route exact path="/explore"  component={Explore} />
        <Route exact path="/chat" component={Chat} />
        <Route exact path="/profile" component={Profile} />
      </>
    </Switch>
  </>
));



export default App;