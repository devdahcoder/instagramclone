import React from 'react'
import "./assets/style/index.css"


//imported components
import UserImage from "../UserImage/UserImage"

const StoryItem = ({story}) => {


    return (

        <div className="story-item-container">
          <div className="link" href="">
            <div className="story-container-image-container">
              <UserImage size="story" image={story.picture.medium} />
            </div>
            <div className="story-text"> {story.login.username} </div>
          </div>
        </div>

    );
}

export default StoryItem
