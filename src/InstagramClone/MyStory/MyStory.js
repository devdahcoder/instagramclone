import React from 'react'
import "./assets/style/index.css"
import Plus from "./assets/images/plus.svg"
const MyStory = ({profile}) => {
    return (
      <div className="story-container">
        <div className="link" href="">
          <div className="story-container-image-container">
            <div className="circle">
              <span className="dele">
                  <img src={Plus} alt="" />
              </span>
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" space="preserve">  
                <circle cx="50" cy="50" r="40" />
              </svg>
          </div>
          </div>
          <div className="story-text"> Your Story </div>
        </div>
      </div>
    );
}

export default MyStory
