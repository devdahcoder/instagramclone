import React from "react";
import "./assets/style/index.css";
import TwoPostItem from "../TwoPostItem/TwoPostItem";
import { v4 as uuid } from "uuid";
const TwoPostDisplay = ({ posts }) => {
  return (
    <div className="two-post-display">
      {posts.map((post) => (
        <TwoPostItem key={uuid()} post={post} />
      ))}
    </div>
  );
};

export default TwoPostDisplay;
