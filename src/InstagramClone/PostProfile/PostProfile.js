import React, {useState} from 'react'
import "./style/postprofile.css";
import "../../styles/global.css"
import ProfileImage from "../ProfileImage/ProfileImage"
import PostDropDown from "../PostDropdown/PostDropDown"

const PostProfile = ({post}) => {

    const [postDropDown, setPostDropDown] = useState(false);

    const togglePostDropDown = () => {
        setPostDropDown(!postDropDown)
    }
    return (
        <section className="post--profile--detail--container">
            <div className="post--user--post--detail">
                <ProfileImage />

                <div className="post--user--post--detail--content">
                    <div className="post--user--post--detail--name">
                        <span className="post--user--detail--span">
                            <a href="" className="post--user--detail--link">
                                {post.name}
                            </a>
                        </span>
                    </div>



                    <div className="post--user--detail--caption--time--container">

                        <div className="post--user--detail--caption--container">
                            <span>Lagos, Nigeria.</span>
                        </div>

                        <div className="post--user--detail--time--container">
                            <a href="" className="post--user--detail--time--link">
                                <time className="post--user--detail--time" datetime="2021-07-05T17:11:09.000Z" title="Jul 5, 2021">14 hours ago</time>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            

            <div className="svg-button-container double-post-button-container">
                <button className="svg-button" onClick={togglePostDropDown}>
                    <div className="svg-container three-post-btn">
                    <span className="svg-button-span">
                        <svg aria-label="More options" class="_8-yf5 " fill="#262626" height="20" viewBox="0 0 48 48" width="20"><circle clip-rule="evenodd" cx="8" cy="24" fill-rule="evenodd" r="4.5"></circle><circle clip-rule="evenodd" cx="24" cy="24" fill-rule="evenodd" r="4.5"></circle><circle clip-rule="evenodd" cx="40" cy="24" fill-rule="evenodd" r="4.5"></circle></svg>
                    </span>
                    </div>
                </button>
                {postDropDown ? <PostDropDown /> : ""}
            </div>
        </section>
    )
}

export default PostProfile
