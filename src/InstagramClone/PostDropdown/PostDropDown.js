import React from 'react';
import "./style/postdropdown.css";


const PostDropDown = () => {
    return (
        <div className="post--option--drop--down--container">
            <div className="post--option--drop--down--display">
                <div className="post--option--drop--down--arrow"></div>


                <div className="post--option--drop--down--main--container" role="dialog">
                    <div className="post--option--drop--down--main--display">
                        <div className="post--option--drop--down--main">
                            <div className="post--option--drop--down">
                                <button className="post--drop--down--btn--container post--drop--down--btn--danger" tabindex="0">Report</button>
                                <button className="post--drop--down--btn--container post--drop--down--btn--danger" tabindex="0">Unfollow</button>
                                <button className="post--drop--down--btn--container" tabindex="0">Go to post</button>
                                <button className="post--drop--down--btn--container" tabindex="0">Share to...</button>
                                <button className="post--drop--down--btn--container" tabindex="0">Copy Link</button>
                                <button className="post--drop--down--btn--container" tabindex="0">Embed</button>
                                <button className="post--drop--down--btn--container" tabindex="0">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default PostDropDown
