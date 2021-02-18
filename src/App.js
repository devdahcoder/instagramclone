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
    <section className="main">
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
    </section>
  );
};





//   return (
//     <div className="main">
//       <Header profile={profile} />

//       <div>
//         <div
//           style={{
//             // border: "2px solid green",
//             display: "flex",
//             flexDirection: "row-reverse",
//             width: "90%",
//             margin: "0 auto",
//             // border: "1px solid red",
//           }}
//         >
//           <section
//             style={{
//               width: "85%",
//               margin: "0 auto",
//               // border: "1px solid red"
//             }}
//             className="main-flex"
//           >
//             <div
//               // style={{ width: "75rem", backgroundColor: "red" }}
//               className="dele"
//             >
//               {/* <Story story={story} profile={profile} /> */}
//               {/* {toggle && <Post posts={posts} />}
//               {!toggle && <TwoPost posts={posts} />} */}
//               {/* <SinglePost posts={posts} /> */}
//             </div>
//           </section>
//           {/* <SideGrid handleClickToggle={handleClickToggle} /> */}
//         </div>
//       </div>
//     </div>
//   );
// };


export default App;