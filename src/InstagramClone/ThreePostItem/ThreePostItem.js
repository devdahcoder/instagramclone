import React from "react";
import "./assets/style/index.css";
import ProfileImage from "../ProfileImage/ProfileImage";
import Love from "../Header/assets/images/heart.svg";
import Send from "../Header/assets/images/send.svg";
import Chat from "./assets/images/chat.svg";
import Option from "./assets/images/post-option.svg";
import LikeScale from "../LikeScale/LikeScale"


const ThreePostItem = ({post}) => {
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


            <div className="three-post-button-container">
              <button>
                <div className="three-post-btn">
                  <span>
                    <img src={Love} alt="" />
                  </span>
                </div>
              </button>
            </div>

            {/* <div className="three-post-button-container">
              <button>
                <div className="three-post-btn">
                  <span>
                    <img src={Chat} alt="" />
                  </span>
                </div>
              </button>
            </div>

            <div className="three-post-button-container">
              <button>
                <div className="three-post-btn">
                  <span>
                    <img src={Send} alt="" />
                  </span>
                </div>
              </button>
            </div> */}
            <div className="three-post-button-container">
              <button>
                <div className="three-post-btn">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 451.2 451.2"><path d="M58.5 284.1C26.2 284.1 0 257.9 0 225.6s26.2-58.5 58.5-58.5c32.3 0 58.5 26.2 58.5 58.5S90.8 284.1 58.5 284.1zM58.5 188.6c-20.4 0-37 16.6-37 37s16.6 37 37 37c20.4 0 37-16.6 37-37S78.9 188.6 58.5 188.6z"/><path d="M225.6 284.1c-32.3 0-58.5-26.2-58.5-58.5s26.2-58.5 58.5-58.5 58.5 26.2 58.5 58.5S257.9 284.1 225.6 284.1zM225.6 188.6c-20.4 0-37 16.6-37 37s16.6 37 37 37 37-16.6 37-37S246 188.6 225.6 188.6z"/><path d="M392.7 284.1c-32.3 0-58.5-26.2-58.5-58.5s26.2-58.5 58.5-58.5c32.3 0 58.5 26.2 58.5 58.5S424.9 284.1 392.7 284.1zM392.7 188.6c-20.4 0-37 16.6-37 37s16.6 37 37 37c20.4 0 37-16.6 37-37S413.1 188.6 392.7 188.6z"/></svg>
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
