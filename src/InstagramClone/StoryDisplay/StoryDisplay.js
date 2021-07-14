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

  const [story, setStory] = useState([])
  // const storys = useSelector((state) => state.storys.storys)
  // const loading = useSelector((state) => state.loading)
  // const error = useSelector((state) => state.error)

  // console.log(storys)

  // const dispatch = useDispatch()
  
  // useEffect(() => {
  //   dispatch(fetchStory());
  // }, [dispatch]);


      useEffect(() => {
        fetch("https://randomuser.me/api/?results=8")
            .then (response => {
                if (response.ok) {
                    return response.json()
                }
                throw response;
            })
            .then(data => {
                console.log(data.results)
                setStory(data.results)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])



  return (
    <div className="story-display">
      <div className="story-inner-div">
        <div className="inner-container">
          <MyStory />
          {story.map((story) => (
            <StoryItem key={uuid()} story={story} />
          ))}
          <StoryWatch />
        </div>
      </div>
    </div>
  );
};


export default StoryDisplay;
