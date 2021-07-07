import React from 'react'
import "./assets/style/index.css"


const ProfileImage = ({ profile, size, post}) => {
  return (
    <span className="profile-header-image" style={{height: size, width: size}}>
      <img
        
        className="profile-header"
        src={post && post.picture.medium}
        alt=""
      />
    </span>
  );
};

export default ProfileImage
