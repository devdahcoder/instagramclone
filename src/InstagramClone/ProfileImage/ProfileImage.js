import React from 'react'
import "./assets/style/index.css"
const ProfileImage = ({ profile }) => {
  return (
    <span className="profile-header-image">
      <img
        className="profile-header"
        src={profile}
        alt=""
      />
    </span>
  );
};

export default ProfileImage
