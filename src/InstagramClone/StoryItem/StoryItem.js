import React from 'react'
import "./assets/style/index.css"


//imported components
import UserImage from "../UserImage/UserImage"

const StoryItem = ({post}) => {
    return (
      <div className="story-item-container">
        <div className="link" href="">
          <div className="story-container-image-container">
            <UserImage image={post.image} />
          </div>
          <div className="story-text"> {post.name} </div>
        </div>
      </div>
    );
}

export default StoryItem
