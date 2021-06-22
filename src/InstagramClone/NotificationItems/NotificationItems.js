import React from 'react';
import "./assets/style/notificationitems.css"

import UserImage from "../UserImage/UserImage";

const NotificationItems = () => {
    return (
        <section className="notification-item-container">
            <div className="notification-item-display">
                <div className="notification-image-container">
                    <UserImage size="notification" />
                </div>

                <div className="notification-detail-container">
                    <span className="notification-detail-span">
                        <a className="notification-detail-link" title="javascript.shitposting" href="/javascript.shitposting/">javascript.shitposting</a>
                        <span> liked your photo.</span>
                    </span>
                    <time className="notification-time" datetime="2021-05-26T05:25:17.582Z" title="May 26, 2021">3w</time>
                </div>
            
                {/* <div className="notification-button-container">
                    <button className="notification-button" type="button">Follow</button>
                </div> */}

                {/* <div className="notification-liked-image-container">
                    <a className="notification-liked-image-link" href="http://" target="_blank" rel="noopener noreferrer">
                        <div className="notification-liked-image-display">
                            <div className="notification-liked-image"> */}
                                {/* <img src="" alt="" /> */}
                                {/* <img crossorigin="anonymous" src="https://www.instagram.com/p/BvJTZ7rBg8o/" alt="notification" />
                            </div>
                        </div>
                    </a>
                </div> */}
            </div>
        </section>
    )
}

export default NotificationItems
