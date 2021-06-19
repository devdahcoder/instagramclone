import React from 'react'
import "./assets/style/index.css"
import "../../styles/global.css"
import ProfileImage from "../ProfileImage/ProfileImage"
import Love from "../Header/assets/images/heart.svg"
import Send from "../Header/assets/images/send.svg"
import Chat from "./assets/images/chat.svg"
import Option from "./assets/images/post-option.svg"
import LikeScale from "../LikeScale/LikeScale"

const PostItem = ({post}) => {

    // const useEffect(() => {
    //     document.querySelector("images").style.height="20px"
    // }, [])

    // const imageUrl = 'https://farm' + post.farm + '.staticflickr.com/' + post.server + '/' + post.id + '_' + post.secret + '.jpg';

    return (
      <div className="double-post-container">
        <section className="first-post-layer">
          <div className="second-post-layer">
            <div className="third-post-layer">
              <img className="images" src={post.image} alt="" />
            </div>
          </div>
          <LikeScale />
        </section>

        <section className="double-post-details">
          <div className="double-user-post-details">
            <ProfileImage />

            <div className="double-user-post-details-content">
              <div className="double-user-post-details-name">
                <a href="">
                  {post.name}
                </a>
              </div>
              <div className="double-user-post-details-time">
                <a href="">
                  2 hrs ago
                </a>
              </div>
            </div>
          </div>



          <div className="double-post-options">
            <span className="likes-link-container">
              <a className="likes-link" href="">
                {post.likes} {post.likes > 1 ? "likes": "like"}
              </a>
            </span>


            <div className="double-post-button-container">
              <button>
                <div className="double-post-btn">
                  <span>
                    <img src={Love} alt="" />
                  </span>
                </div>
              </button>
            </div>

            <div className="double-post-button-container">
              <button>
                <div className="double-post-btn">
                  <span>
                    <img src={Chat} alt="" />
                  </span>
                </div>
              </button>
            </div>

            <div className="double-post-button-container">
              <button>
                <div className="double-post-btn">
                  <span>
                    <img src={Send} alt="" />
                  </span>
                </div>
              </button>
            </div>
            <div className="double-post-button-container">
              <button>
                <div className="double-post-btn">
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

export default PostItem
