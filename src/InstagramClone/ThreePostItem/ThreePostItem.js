import React from "react";
import "./assets/style/index.css";
import ProfileImage from "../ProfileImage/ProfileImage";
import Love from "../Header/assets/images/heart.svg";
import Send from "../Header/assets/images/send.svg";
import Chat from "./assets/images/chat.svg";
import Option from "./assets/images/post-option.svg";



const ThreePostItem = ({post}) => {
    return (
      <div className="three-post-container">
        <section className="first-post-layer">
          <div className="second-post-layer">
            <div className="third-post-layer">
              <img className="images" src={post.image} alt="" />
            </div>
          </div>
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
                    <img src={Option} alt="" />
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
