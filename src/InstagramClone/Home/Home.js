import React, { useState, useEffect } from "react";
import "./assets/index.css";
import "../../styles/global.css"
import Post from "../Post/Post";
import Story from "../Story/Story";
import SideGrid from "../SideGrid/SideGrid";
import Header from "../Header/Header";



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
    <section className="global-section global-sub-section">
      <Header />
      <main className="home-page-main">
        <section className="main-home-section">
          <div className="home-page-post-container">

            <Story />

            <div className="post-section">
              <Post />
            </div>

            {/* pagination spinner component goes here */}
            {/* spinner pagination component */}
          </div>

          {/* <div className="side-bar">
            <SideGrid />
          </div> */}
        </section>
      </main>
    </section>
  );
}

export default Home
