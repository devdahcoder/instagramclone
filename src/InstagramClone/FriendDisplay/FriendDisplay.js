import React from 'react'
import "./assets/style/index.css";
import FriendList from "../FriendList/FriendList"
import {v4 as uuid} from "uuid"
 
const FriendDisplay = ({posts}) => {
    return (
      <div className="friend-display-nav">
        {posts.map((post) => (
          <FriendList key={uuid()} post={post} />
        ))}
      </div>
    );
}

export default FriendDisplay
