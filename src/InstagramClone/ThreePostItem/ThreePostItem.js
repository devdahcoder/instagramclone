import React, {useState} from "react";
import "./assets/style/index.css";
import ProfileImage from "../ProfileImage/ProfileImage";
import Love from "../Header/assets/images/heart.svg";
import Send from "../Header/assets/images/send.svg";
import Chat from "./assets/images/chat.svg";
import Option from "./assets/images/post-option.svg";
import LikeScale from "../LikeScale/LikeScale"

const ThreePostItem = ({post}) => {

  const [like, setLike] = useState(false);

  const turnLike = () => {
    setLike(!like)
  }
  
    return (
      <div className="three-post-container">
        <section className="first-post-layer">
          <div className="second-post-layer">
            <div className="third-post-layer">
              <img className="images" src={post.image} alt="" />
            </div>
          </div>
          <LikeScale />
        </section>

        <section className="three-post-details">
          <div className="three-user-post-details">
            <ProfileImage />

            <div className="three-user-post-details-content">
              <div className="three-user-post-details-name">
                <a href="">
                  {post.name}
                </a>
              </div>
              <div className="three-user-post-details-time">
                <a href="">
                  2 hrs ago
                </a>
              </div>
            </div>
          </div>



          <div className="three-post-options">
            <span className="likes-link-container">
              <a className="likes-link" href="">
                {post.likes} {post.likes > 1 ? "likes": "like"}
              </a>
            </span>


            <div className="svg-button-container three-post-button-container">
              <button className="svg-button">
                <div className="svg-container three-post-btn">
                  <span className="svg-button-span">
                    {/* <svg aria-label="Unlike" class="_8-yf5 " fill="#ed4956" height="15" viewBox="0 0 48 48" width="15"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg> */}
                    <svg aria-label="Like" fill="#262626" height="16" viewBox="0 0 48 48" width="16"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
                  </span>
                </div>
              </button>
            </div>

            <div className="svg-button-container three-post-button-container">
              <button className="svg-button">
                <div className="svg-container three-post-btn">
                  <span className="svg-button-span">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" height="15" width="15" viewBox="0 0 451.2 451.2"><path d="M58.5 284.1C26.2 284.1 0 257.9 0 225.6s26.2-58.5 58.5-58.5c32.3 0 58.5 26.2 58.5 58.5S90.8 284.1 58.5 284.1zM58.5 188.6c-20.4 0-37 16.6-37 37s16.6 37 37 37c20.4 0 37-16.6 37-37S78.9 188.6 58.5 188.6z"/><path d="M225.6 284.1c-32.3 0-58.5-26.2-58.5-58.5s26.2-58.5 58.5-58.5 58.5 26.2 58.5 58.5S257.9 284.1 225.6 284.1zM225.6 188.6c-20.4 0-37 16.6-37 37s16.6 37 37 37 37-16.6 37-37S246 188.6 225.6 188.6z"/><path d="M392.7 284.1c-32.3 0-58.5-26.2-58.5-58.5s26.2-58.5 58.5-58.5c32.3 0 58.5 26.2 58.5 58.5S424.9 284.1 392.7 284.1zM392.7 188.6c-20.4 0-37 16.6-37 37s16.6 37 37 37c20.4 0 37-16.6 37-37S413.1 188.6 392.7 188.6z"/></svg> */}
                    <svg aria-label="More options" fill="#262626" height="16" viewBox="0 0 48 48" width="16"><circle clip-rule="evenodd" cx="8" cy="24" fill-rule="evenodd" r="4.5"></circle><circle clip-rule="evenodd" cx="24" cy="24" fill-rule="evenodd" r="4.5"></circle><circle clip-rule="evenodd" cx="40" cy="24" fill-rule="evenodd" r="4.5"></circle></svg>
                  </span>
                </div>
              </button>
            </div>
          </div>
        </section>
      </div>
    );
}

export default ThreePostItem
