import React from 'react'
import "./assets/style/index.css"
const StoryItem = ({post}) => {
    return (
      <div className="story-container">
        <div className="link" href="">
          <div className="story-container-image-container">
            <div className="circle">
              <span className="dele">
                <img src={post.image} alt="" />
              </span>
              
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" space="preserve">  
                <circle cx="50" cy="50" r="40" />
              </svg>
          </div>
          </div>
          <div className="story-text"> {post.name} </div>
        </div>
      </div>
      
      
    );
    //   <div className="story-container">
    //     <div className="link" href="">
    //       <div className="story-container-image-container">
    //         <span>
    //           <img
    //             className="story-container-image"
    //             src={post.image}
    //             alt=""
    //           />
    //         </span>
    //       </div>
    //       <div className="story-text"> {post.name} </div>
    //     </div>
    //   </div>
    // );
}

export default StoryItem






// $story-image-sizing: 56px;

// .story-container {
//     // font-size: 12px;
//     // line-height: 18px;
//     // text-align: center;
//     // text-decoration: none;
//     // color: black;
//     height: 122px;
//     padding: 0 4px;
//     top: 2px;
//     width: 80px;
//     list-style: none;
//     border: 1px solid red;

//     .link {
//         align-items: center;
//         align-self: center;
//         background: 0 0;
//         border: 0;
//         cursor: pointer;
//         display: flex;
//         flex-direction: column;
//         padding-bottom: 0;
//         padding-top: 0;
//         text-align: center;
//         width: 64px;


//         .story-container-image-container {
//             margin-bottom: 8px;
//             margin-top: 4px;

//             // .cfwv {
//             //     position: absolute;
//             //     top: -5px;
//             //     left: -5px;
//             //     width: 66px;
//             //     height: 66px;
//             // }
//             span {
//                 background-color: #fafafa;
//                 background-color: rgba(var(--b3f, 250, 250, 250), 1);
//                 border-radius: 50%;
//                 border: 2px solid rgba(255, 115, 0, 0.637); //if image quality display gets affected please delete
//                 padding: 2px; //if image quality display gets affected please delete
//                 box-sizing: border-box;
//                 display: block;
//                 flex: 0 0 auto;
//                 overflow: hidden;
//                 position: relative;
//                 width: 60px;
//                 height: 60px;

//                 .story-container-image {
//                     height: 100%;
//                     width: 100%;
//                     border-radius: 50%;  //if image quality display gets affected please delete
//                     // padding:2px;
//                     // border:2px solid #021a40;
//                     // background-color:#ff0;
//                     // border-radius: 50%;
//                     // width: $story-image-sizing;
//                     // height: $story-image-sizing;
//                     // display: block;
//                     // border: 3px solid transparent;
//                     // box-shadow: 0 0 0 3px linear-gradient(180deg, #f86363, #f1ff74);
//                 }
//             }
//         }

//         .story-text {
//             letter-spacing: .01em;
//             max-width: 74px;
//             color: #262626;
//             display: block;
//             font-size: 12px;
//             line-height: 14px;
//             // max-width: 64px;
//             overflow: hidden;
//             position: absolute;
//             text-align: center;
//             text-overflow: ellipsis;
//             top: 68px;
//             white-space: nowrap;
//         }
//     }
// }