import React from 'react'
import "./assets/styles/styles.css"


const Notification = () => {
    return (
        <section className="notification-section">
            <main className="notification-main">
                <div className="notification-container">
                    <div className="notification-center">
                        <div className="notification-display">
                            <div className="notification-list">

                                <div className="notification-profile-container">
                                    <div className="notification-profile-display">
                                        <div className="notification-profile-center" aria-disabled="true" role="button" tabindex="-1">
                                            <canvas className="notification-canvas" height="44" width="44" ></canvas>
                                            <a className="notification-profile-link" href="/itz_emmyk406/" tabindex="0" >
                                                <img alt="itz_emmyk406's profile picture" class="notification-profile-img" data-testid="user-avatar" draggable="false" src="https://scontent-los2-1.cdninstagram.com/v/t51.2885-19/s150x150/140666438_133809845240257_8536045748561233405_n.jpg?_nc_ht=scontent-los2-1.cdninstagram.com&_nc_ohc=WUtCdypZOSQAX9UiQi1&tp=1&oh=d1bd0566bede6612c67cdc3cb32862a4&oe=604B9169" />
                                            </a>
                                        </div>
                                    </div>
                                </div>



                                <div className="notification-user-container">
                                    <a className="notification-user-link" title="itz_emmyk406" href="/itz_emmyk406/" tabindex="0">itz_emmyk406</a> liked your photo.<time className="notification-time" datetime="2021-02-08T21:15:36.885Z" title="Feb 8, 2021">10h</time>
                                </div>


                                <div className="notification-post-container">
                                    <a className="notification-post-link" href="/p/CK7j12rpGPV/" tabindex="0">
                                        <div className="notification-post-display">
                                            <div class="notification-image-container">
                                                <img class="notification-post-image" decoding="auto" sizes="40px" srcset="https://scontent-los2-1.cdninstagram.com/v/t51.2885-15/e35/s320x320/146364313_416184506107868_2546048935295243538_n.jpg?_nc_ht=scontent-los2-1.cdninstagram.com&_nc_cat=108&_nc_ohc=XG6AaS4ppbMAX8SZ00w&tp=1&oh=bdf1eea449675c6100359908bdd0a66c&oe=604B1967" />
                                            </div>
                                            {/* <div class="_9AhH0">

                                            </div> */}
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="notification-list">

                                <div className="notification-profile-container">
                                    <div className="notification-profile-display">
                                        <div className="notification-profile-center" aria-disabled="true" role="button" tabindex="-1">
                                            <canvas className="notification-canvas" height="44" width="44" ></canvas>
                                            <a className="notification-profile-link" href="/itz_emmyk406/" tabindex="0" >
                                                <img alt="itz_emmyk406's profile picture" class="notification-profile-img" data-testid="user-avatar" draggable="false" src="https://scontent-los2-1.cdninstagram.com/v/t51.2885-19/s150x150/140666438_133809845240257_8536045748561233405_n.jpg?_nc_ht=scontent-los2-1.cdninstagram.com&_nc_ohc=WUtCdypZOSQAX9UiQi1&tp=1&oh=d1bd0566bede6612c67cdc3cb32862a4&oe=604B9169" />
                                            </a>
                                        </div>
                                    </div>
                                </div>



                                <div className="notification-user-container">
                                    <div className="notification-user-link-container">
                                        <a className="notification-user-link" title="itz_emmyk406" href="/itz_emmyk406/" tabindex="0">itz_emmyk406</a>
                                    </div>  started following you.<time className="notification-time" datetime="2021-02-08T21:15:36.885Z" title="Feb 8, 2021">10h</time>
                                </div>


                                <div className="notification-post-container">
                                    <button class="follow-btn" type="button">Follow</button>
                                    {/* <a className="notification-post-link" href="/p/CK7j12rpGPV/" tabindex="0">
                                        <div className="notification-post-display">
                                            <div class="notification-image-container">
                                                <img class="notification-post-image" decoding="auto" sizes="40px" srcset="https://scontent-los2-1.cdninstagram.com/v/t51.2885-15/e35/s320x320/146364313_416184506107868_2546048935295243538_n.jpg?_nc_ht=scontent-los2-1.cdninstagram.com&_nc_cat=108&_nc_ohc=XG6AaS4ppbMAX8SZ00w&tp=1&oh=bdf1eea449675c6100359908bdd0a66c&oe=604B1967" />
                                            </div>
                                            <div class="_9AhH0">

                                            </div>
                                        </div>
                                    </a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    )
}

export default Notification
