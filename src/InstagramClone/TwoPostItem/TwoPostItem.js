import React from "react";
import "./assets/style/index.css";
import ProfileImage from "../ProfileImage/ProfileImage";
import Love from "../Header/assets/images/heart.svg";
import Send from "../Header/assets/images/send.svg";
import Chat from "./assets/images/chat.svg";
import Option from "./assets/images/post-option.svg";
const TwoPostItem = ({ post }) => {
  // const useEffect(() => {
  //     document.querySelector("images").style.height="20px"
  // }, [])

  // const imageUrl = 'https://farm' + post.farm + '.staticflickr.com/' + post.server + '/' + post.id + '_' + post.secret + '.jpg';

  return (
    <div className="post-container">
      <div className="f">
        <div className="s">
          <div className="t">
            <img className="images" src={post.urls.full} alt="" />
          </div>
        </div>
      </div>

      <div className="post-details">
        <div className="user-post-details">
          <ProfileImage />
          <div className="user-post-details-content">
            <a className="profile-name-link" href="">
              {post.user.instagram_username}
            </a>
            <p className="profile-location">2 hrs ago</p>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="post-buttons">
            <a className="likes-link" href="">
              1234 likes
            </a>
          </div>
          <div className="post-buttons">
            <img className="post-details-logo" src={Love} alt="" />
          </div>
          <div className="post-buttons">
              <img className="post-details-logo" src={Chat} alt="" />
            </div>
            <div className="post-buttons">
              <img className="post-details-logo" src={Send} alt="" />
            </div>
          <div className="post-button">
            <img className="post-details-logo" src={Option} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoPostItem;
