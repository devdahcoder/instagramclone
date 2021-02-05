import React, {useEffect, useState} from 'react'
import "./assets/style/index.css"
import StoryItem from "../StoryItem/StoryItem"
import StoryWatch from "../StoryWatch/StoryWatch"
import MyStory from "../MyStory/MyStory"
import Mookie from "./assets/image/mookie.jpg"
import Billie from "./assets/image/story.jpg"
import { v4 as uuid } from "uuid";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchStory } from "../../actions/storyAction"

const initialState = [
  {
    image: Billie,
    name: "billie"
  },
  {
    image: Mookie,
    name: "mookie"
  },
  {
    image: Mookie,
    name: "Davido"
  },
  {
    image: Billie,
    name: "Miley"
  },
  {
    image: Mookie,
    name: "Delewire"
  },
  {
    image: Mookie,
    name: "mookie"
  },
  {
    image: Billie,
    name: "billie"
  },
  {
    image: Mookie,
    name: "mookie"
  },
]
const StoryDisplay = () => {

  const [storys, setStories] = useState(initialState)
  // const storys = useSelector((state) => state.storys.storys)
  // const loading = useSelector((state) => state.loading)
  // const error = useSelector((state) => state.error)

  // console.log(storys)

  // const dispatch = useDispatch()
  
  // useEffect(() => {
  //   dispatch(fetchStory());
  // }, [dispatch]);


  // if (loading) return <h1>loading...</h1>

  return (
    <div className="story-display">
      <div className="story-inner-div">
        <div className="inner-container">
          <MyStory />
          {storys.map((post) => (
            <StoryItem key={uuid()} post={post} />
          ))}
          <StoryWatch />
        </div>
      </div>
    </div>
  );
};


export default StoryDisplay;
