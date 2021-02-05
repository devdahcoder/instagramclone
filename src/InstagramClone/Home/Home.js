import React, { useState, useEffect } from "react";
import "./assets/index.css"
import Post from "../Post/Post"
// import ResetPassword from "../ResetPassword/ResetPassword"
import SignUp from "../SignUp/SignUp"
// import SinglePost from "../SinglePost/SinglePost"
// import ThreePost from "../ThreePost/ThreePost"
import Story from "../Story/Story"
import SideGrid from "../SideGrid/SideGrid"
// import Post from "../Post/Post"
const Home = () => {
  // const [story, setStory] = useState([]);
  // const [posts, setPosts] = useState([]);
  // const [profile, setProfile] = useState([]);
  // const [toggle, setToggle] = useState(true);

  // const API_KEY = process.env.REACT_APP_API_KEY;


  
  // useEffect(() => {
  //   fetch("https://randomuser.me/api/?results=8")
  //     .then(response => response.json())
  //     .then(response => {
  //       setStory(response.results)
  //       setProfile(response.results[0].picture.large);
  //       console.log(response.results)
  //     })
  //     .catch(error => console.log(error))
  // }, [])


  // const apiRequest = `https://api.unsplash.com/search/photos?client_id=${API_KEY}&query=people&orientation=squarish`;
  // useEffect(() => {
  //   fetch(apiRequest)
  //     .then((response) => response.json())
  //     .then((response) => {
  //       setPosts(response.results);
  //       console.log(response.results);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);



  return (
    <section className="home-section">
      <SignUp />
      {/* <ResetPassword /> */}
      {/* <Story />
      <div className="home-main">
        <div className="post-section">
            <div>
              {/* <ThreePost /> */}
              {/* <Post  /> */}
              {/* {!toggle && <TwoPost posts={posts} />} */}
              {/* <SinglePost /> */}
            {/* </div>
        </div> */}


        {/* <div className="side-bar">
          <SideGrid />
        </div>
      </div> */}
    </section>
  );
}

export default Home
