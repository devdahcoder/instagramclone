import React from "react";
import "./assets/style/index.css";
import ProfileImage from "../ProfileImage/ProfileImage";
import Love from "../Header/assets/images/heart.svg";
import Send from "../Header/assets/images/send.svg";
import Chat from "./assets/images/chat.svg";
import Save from "./assets/images/save.svg"
import Option from "./assets/images/post-option.svg";

const SinglePostItem = ({post}) => {
    return (
      <div className="single-post-container">
        <section className="first-post-layer">
          <div className="second-post-layer">
            <div className="third-post-layer">
              <img className="images" src={post.image} alt="" />
            </div>
          </div>
        </section>

        <section className="single-post-details">
          <div className="single-user-post-details">
            <div className="single-user-post-detail-header">
              <ProfileImage />

              <div className="single-user-post-details-content">
                <div className="single-user-post-details-name">
                  <a href="">
                    {post.name}
                  </a>
                </div>
                <div className="single-user-post-details-time">
                  <a href="">
                    2 hrs ago
                  </a>
                </div>
              </div>
            </div>

            <div className="single-post-button-container">
              <button>
                <div className="single-post-btn">
                  <span>
                    <img src={Option} alt="" />
                  </span>
                </div>
              </button>
            </div>
          </div>



          <div className="single-post-button-container-display">
            <div className="single-post-button-container">
              <button>
                <div className="single-post-btn">
                  <span>
                    <img src={Love} alt="" />
                  </span>
                </div>
              </button>
            </div>

            <div className="single-post-button-container">
              <button>
                <div className="single-post-btn">
                  <span>
                    <img src={Chat} alt="" />
                  </span>
                </div>
              </button>
            </div>
            <div className="single-post-button-container">
              <button>
                <div className="single-post-btn">
                  <span>
                    <img src={Send} alt="" />
                  </span>
                </div>
              </button>
            </div>
            <div className="single-post-button-container">
              <button>
                <div className="single-post-btn">
                  <span>
                    <img src={Save} alt="" />
                  </span>
                </div>
              </button>
            </div>
          </div>

          <div className="single-post-like-container">
            <div className="single-post-like-display">
              <p>
                Liked by <span><a href="">Davido</a></span> and  
              </p>
              <button>{post.likes} others</button>
            </div>
          </div>
          

          <div className="over-flow-ul">
          <div className="over-flow">
            <div className="single-post-content">
            <div className="single-post-caption">
              <div className="single-post-caption-user-detail">
                <div className="single-post-username"><span><a href="">{post.name}</a></span></div>
              </div>

              <span></span> dolor sit amet consectetur adipisicing elit. Expedita dolorum enim adipisci dicta illo voluptatibus saepe quo provident aliquid eveniet, excepturi id! Odit veniam repellendus nam sint voluptas adipisci eum.

              {/* <a href="">@developer</a>
              <a href="">@developer</a>
              <a href="">@developer</a>
              <a href="">@developer</a>
              <a href="">@developer</a>
              <a href="">@developer</a>
              <a href="">@developer</a>
              <a href="">@developer</a>
              <a href="">@developer</a>
              <a href="">@developer</a> */}
            </div>
            <div className="single-post-time-container">
              <p className="single-post-time">{post.timestamp}</p>
            </div>
          </div>


            <div className="reply-container">
            <ul>
              <li>

                <div className="single-post-comment">
                  <div className="comment-button-container">
                    <button>
                      <div className="comment-post-btn">
                        <span>
                          <img src={Love} alt="" />
                        </span>
                      </div>
                    </button>
                  </div>
                  <div className="comment-caption">
                    <div className="comment-caption-user-detail">
                      <div className="comment-post-username"><span><a href="">{post.name}</a></span></div>
                    </div>
                      adipisci eum.
                  </div>
                </div>
                
              </li>
              <li>

                <div className="single-post-comment">
                  <div className="comment-button-container">
                    <button>
                      <div className="comment-post-btn">
                        <span>
                          <img src={Love} alt="" />
                        </span>
                      </div>
                    </button>
                  </div>
                  <div className="comment-caption">
                    <div className="comment-caption-user-detail">
                      <div className="comment-post-username"><span><a href="">{post.name}</a></span></div>
                    </div>
                      adipisci eum.
                  </div>
                </div>
                
              </li>
              <li>

                <div className="single-post-comment">
                  <div className="comment-button-container">
                    <button>
                      <div className="comment-post-btn">
                        <span>
                          <img src={Love} alt="" />
                        </span>
                      </div>
                    </button>
                  </div>
                  <div className="comment-caption">
                    <div className="comment-caption-user-detail">
                      <div className="comment-post-username"><span><a href="">{post.name}</a></span></div>
                    </div>
                      adipisci eum.
                  </div>
                </div>
                
              </li>
              <li>

                <div className="single-post-comment">
                  <div className="comment-button-container">
                    <button>
                      <div className="comment-post-btn">
                        <span>
                          <img src={Love} alt="" />
                        </span>
                      </div>
                    </button>
                  </div>
                  <div className="comment-caption">
                    <div className="comment-caption-user-detail">
                      <div className="comment-post-username"><span><a href="">{post.name}</a></span></div>
                    </div>
                      adipisci eum.
                  </div>
                </div>
                
              </li>
              <li>

                <div className="single-post-comment">
                  <div className="comment-button-container">
                    <button>
                      <div className="comment-post-btn">
                        <span>
                          <img src={Love} alt="" />
                        </span>
                      </div>
                    </button>
                  </div>
                  <div className="comment-caption">
                    <div className="comment-caption-user-detail">
                      <div className="comment-post-username"><span><a href="">{post.name}</a></span></div>
                    </div>
                      adipisci eum.
                  </div>
                </div>
                
              </li>
              <li>

                <div className="single-post-comment">
                  <div className="comment-button-container">
                    <button>
                      <div className="comment-post-btn">
                        <span>
                          <img src={Love} alt="" />
                        </span>
                      </div>
                    </button>
                  </div>
                  <div className="comment-caption">
                    <div className="comment-caption-user-detail">
                      <div className="comment-post-username"><span><a href="">{post.name}</a></span></div>
                    </div>
                      adipisci eum.
                  </div>
                </div>
                
              </li>
              <li>

                <div className="single-post-comment">
                  <div className="comment-button-container">
                    <button>
                      <div className="comment-post-btn">
                        <span>
                          <img src={Love} alt="" />
                        </span>
                      </div>
                    </button>
                  </div>
                  <div className="comment-caption">
                    <div className="comment-caption-user-detail">
                      <div className="comment-post-username"><span><a href="">{post.name}</a></span></div>
                    </div>
                      adipisci eum.
                  </div>
                </div>
                
              </li>
              <li>

                <div className="single-post-comment">
                  <div className="comment-button-container">
                    <button>
                      <div className="comment-post-btn">
                        <span>
                          <img src={Love} alt="" />
                        </span>
                      </div>
                    </button>
                  </div>
                  <div className="comment-caption">
                    <div className="comment-caption-user-detail">
                      <div className="comment-post-username"><span><a href="">{post.name}</a></span></div>
                    </div>
                      adipisci eum.
                  </div>
                </div>
                
              </li>
              <li>

                <div className="single-post-comment">
                  <div className="comment-button-container">
                    <button>
                      <div className="comment-post-btn">
                        <span>
                          <img src={Love} alt="" />
                        </span>
                      </div>
                    </button>
                  </div>
                  <div className="comment-caption">
                    <div className="comment-caption-user-detail">
                      <div className="comment-post-username"><span><a href="">{post.name}</a></span></div>
                    </div>
                      adipisci eum.
                  </div>
                </div>
                
              </li>
            </ul>
          </div>

          </div>
          </div>

          <div className="comment-form-container">
              <div>
                <form action="">
                  <button className="comment-form-profile">
                    <ProfileImage />
                  </button>

                  <textarea aria-label="Add a comment…" placeholder="Add a comment…" class="Ypffh" autocomplete="off" autocorrect="off"></textarea>

                  <button class="post-comment-btn" type="submit">Post</button>
                </form>
              </div>
          </div>



          {/* <div className="single-post-options">
            <span className="likes-link-container">
              <a className="likes-link" href="">
                {post.likes} {post.likes > 1 ? "likes": "like"}
              </a>
            </span>


            <div className="single-post-button-container">
              <button>
                <div className="single-post-btn">
                  <span>
                    <img src={Love} alt="" />
                  </span>
                </div>
              </button>
            </div> */}

            
            
          {/* </div> */}
        </section>
      </div>
    );
}

export default SinglePostItem
