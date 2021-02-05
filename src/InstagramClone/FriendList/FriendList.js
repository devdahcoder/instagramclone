import React from 'react'
import "./assets/style/index.css";
import Instagram from "../Header/./assets/images/instagram.svg";
const FriendList = ({post}) => {
    return (
      <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
        <div className="friend-list-view">
          <div className="active-friend-list">
            <span className="friend-list-image-span">
              <img className="friend-list-image" src={post.urls.full} alt="" />
            </span>

            <span className="status"></span>
          </div>

          <div className="friend-list-details">
            <h6>{post.user.instagram_username}</h6>

            <p>Active now</p>
          </div>
        </div>

            <img style={{height: "22px"}} src={Instagram} alt=""/>

        
      </div>
    );
}

export default FriendList
