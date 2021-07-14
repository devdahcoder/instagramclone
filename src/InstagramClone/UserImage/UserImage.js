import React, {useEffect} from 'react';
import "./style/userimage.css";

const UserImage = ({image, size}) => {




    const imageStyleCondition = (size) => {
        let imageSize;
        if (size === "notification") {
            imageSize = {
                circleSize: {
                    width: "55px",
                    height: "55px",
                },
                
                imageContainerSize: {
                    width: "40px",
                    height: "40px",
                }
            }
        }
        else if (size === "story") {
            imageSize = {
                circleSize: {
                    width: "80px",
                    height: "80px",
                },
                
                imageContainerSize: {
                    width: "58px",
                    height: "58px",
                }
            }
        }
        console.log(imageSize.imageContainerSize);
        return imageSize;
        
    }

    return (
        <div className="user-circle circle" style={imageStyleCondition(size)?.circleSize}>

            <span className="user-dele dele" style={imageStyleCondition(size)?.imageContainerSize}>
                <img src={image} alt="images" />
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
    )
}

export default UserImage
