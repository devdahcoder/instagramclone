import React from 'react'
import "./assets/style/index.css"
const ProfileImage = ({ profile, size}) => {
  return (
    <span className="profile-header-image" style={{height: size, width: size}}>
      <img
        
        className="profile-header"
        src={profile}
        alt=""
      />
    </span>
  );
};

export default ProfileImage
