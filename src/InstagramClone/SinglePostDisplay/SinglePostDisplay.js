import React, {useEffect, useState} from "react";
import "./assets/style/index.css";
import SinglePostItem from "../SinglePostItem/SinglePostItem";
import { v4 as uuid } from "uuid";
// import {useSelector, useDispatch} from "react-redux"
// import {fetchPost} from "../../actions/postAction"




const initialState = [
  {
      image: "https://images.unsplash.com/photo-1611581889333-d10bfc5ec387?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      // profileimage: Billie,
      name: "Billiebiuibbbbbbbbbbbbbbbbbbjjjjjjjjjjjjjjjjj",
      timestamp: "2 hours ago",
      likes: 1,

  },
  {
      image: "https://images.unsplash.com/photo-1477932746085-44533a14e037?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8dG93SlpGc2twR2d8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      // profileimage: Billie,
      name: "Billie",
      timestamp: "2 hours ago",
      likes: 123,

  },
  {
      image: "https://images.unsplash.com/photo-1521337706264-a414f153a5ed?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8dG93SlpGc2twR2d8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      // profileimage: Billie,
      name: "Billie",
      timestamp: "2 hours ago",
      likes: 123,

  },
  {
      image: "https://images.unsplash.com/photo-1599780196508-80547099535c?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8dG93SlpGc2twR2d8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      // profileimage: Billie,
      name: "Billie",
      timestamp: "2 hours ago",
      likes: 123,

  },
  {
      image: "https://images.unsplash.com/photo-1507061072496-3a3013787053?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8dG93SlpGc2twR2d8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      // profileimage: Billie,
      name: "Billie",
      timestamp: "2 hours ago",
      likes: 123,

  },
  {
      image: "https://images.unsplash.com/photo-1610768539991-c592dbbb6543?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfHRvd0paRnNrcEdnfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      // profileimage: Billie,
      name: "Billie",
      timestamp: "2 hours ago",
      likes: 123,

  },
  {
      image: "https://images.unsplash.com/photo-1507061072496-3a3013787053?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8dG93SlpGc2twR2d8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      // profileimage: Billie,
      name: "Billie",
      timestamp: "2 hours ago",
      likes: 123,

  },
  {
      image: "https://images.unsplash.com/photo-1568053006590-614a133c39aa?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fEpwZzZLaWRsLUhrfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      // profileimage: Billie,
      name: "Billie",
      timestamp: "2 hours ago",
      likes: 123,

  },
  {
      image: "https://images.unsplash.com/photo-1611182911608-01f69e20c73d?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Sjl5clBhSFhSUVl8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      // profileimage: Billie,
      name: "Billie",
      timestamp: "2 hours ago",
      likes: 123,

  },
  {
      image: "https://images.unsplash.com/photo-1611325969123-5a780a486079?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fGhtZW52UWhVbXhNfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      // profileimage: Billie,
      name: "Billie",
      timestamp: "2 hours ago",
      likes: 123,

  },
  {
      image: "https://images.unsplash.com/photo-1611436160120-c0bd8c279e64?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8aG1lbnZRaFVteE18fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      // profileimage: Billie,
      name: "Billie",
      timestamp: "2 hours ago",
      likes: 123,

  },
  {
      image: "https://images.unsplash.com/photo-1611436160120-c0bd8c279e64?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8aG1lbnZRaFVteE18fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      // profileimage: Billie,
      name: "Billie",
      timestamp: "2 hours ago",
      likes: 123,

  },
]




const SinglePostDisplay = () => {

  const [posts, setPosts] = useState(initialState)

  // const posts = useSelector((state) => state.posts.posts)

  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(fetchPost())
  // }, [dispatch])
  return (
    <div className="single-post-display">
      {posts.map((post) => (
        <SinglePostItem key={uuid()} post={post} />
      ))}
    </div>
  );
}

export default SinglePostDisplay
