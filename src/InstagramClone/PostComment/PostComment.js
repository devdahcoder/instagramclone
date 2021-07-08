import React from 'react'
import "./style/postcomment.css"
import "../../styles/global.css"

//imported components
import ProfileImage from "../ProfileImage/ProfileImage" 

const PostComment = () => {
    return (
        <div className="post--comment--text--area--container">
            <div className="post--comment--text--area--display">
                <div className="post--comment--text--area--profile--image--container">
                    <ProfileImage />
                </div>


                <div className="post--comment--text--area--form--container">
                    <div className="svg-button-container chat-btn-container">
                        <button class="svg-button wpO6b " type="button">
                            <div class="svg-container QBdPU ">
                                <svg aria-label="Emoji" class="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M24 48C10.8 48 0 37.2 0 24S10.8 0 24 0s24 10.8 24 24-10.8 24-24 24zm0-45C12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21S35.6 3 24 3z"></path><path d="M34.9 24c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5zm-21.8 0c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5zM24 37.3c-5.2 0-8-3.5-8.2-3.7-.5-.6-.4-1.6.2-2.1.6-.5 1.6-.4 2.1.2.1.1 2.1 2.5 5.8 2.5 3.7 0 5.8-2.5 5.8-2.5.5-.6 1.5-.7 2.1-.2.6.5.7 1.5.2 2.1 0 .2-2.8 3.7-8 3.7z"></path></svg>
                            </div>
                        </button>
                    </div>

                    <div className="post--comment--text--area--form--display">
                        <textarea  className="textarea" placeholder="Messages..." name="" id="" ></textarea>
                    </div>
                </div>

                <div className="svg-button-container post--comment--text--area--send--svg--container">
                    <button class="svg-button " type="button">
                        <div class="svg-container ">
                            <svg aria-label="Share Post" class="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path></svg>
                        </div>
                    </button>
                </div>


            </div>
        </div>
    )
}

export default PostComment
