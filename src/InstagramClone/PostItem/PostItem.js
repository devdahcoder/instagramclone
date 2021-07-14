import React, {useState} from 'react'
import "./assets/style/index.css"
import "../../styles/global.css"

//imported components
import PostProfile from "../PostProfile/PostProfile"
import PostComment from "../PostComment/PostComment"
import PostCommentContainer from "../PostCommentContainer/PostCommentContainer"
import LikedBy from "../LikedBy/LikedBy"
import PostUtil from "../PostUtil/PostUtil"
import LikeScale from "../LikeScale/LikeScale"
import ChatTextArea from '../ChatTextArea/ChatTextArea'

const PostItem = ({post, postsImage, index}) => {


    const [like, setLike] = useState(false);
    const [svgLike, setSvgLike] = useState(false)


    const likeEvent = () => {
      setLike(!like);
    }

    const svgLiked = () => {
      setSvgLike(!svgLike);
    }

    

    return (
      <div className="double-post-container">

        <PostProfile post={post} />

        <section onDoubleClick={likeEvent} className="first-post-layer">
          <div className="second-post-layer">
            <div className="third-post-layer">
              <img className="images" src={postsImage[index].urls.full } alt="" />
            </div>
          </div>
          {like ? <LikeScale /> : ""}
        </section>

        <section className="double-post-details">
          



          <div className="double-post-options">
            
            <PostUtil svgLiked={svgLiked} svgLike={svgLike} />

            

            <LikedBy />



            <PostCommentContainer />



            <PostComment />

            

          </div>
        </section>
      </div>
    );
}

export default PostItem
