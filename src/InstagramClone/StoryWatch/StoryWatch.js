import React from 'react'
import "./assets/style/index.css"
import Play from "./assets/images/play.svg"
const StoryWatch = () => {
    return (
      <div className="story-container">
        <div className="link" href="">
          <div className="story-container-image-container">
            <div className="circle">
              <span className="dele">
                  <img className="story-play-all" src={Play} alt="" />
              </span>
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" space="preserve">
                <defs>
                    <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%"   stop-color="#fdf497"/>
                        <stop offset="5%" stop-color="#fdf497"/>
                        <stop offset="45%"   stop-color="#fd5949"/>
                        <stop offset="60%" stop-color="#d6249f"/>
                        <stop offset="100%" stop-color="#285AEB"/>
                    </linearGradient>
                </defs>  
                <circle cx="50" cy="50" r="40" stroke="url(#linear)" />
            </svg>
          </div>
          </div>
          <div className="story-text"> Watch all</div>
        </div>
      </div>
    );
}

export default StoryWatch
