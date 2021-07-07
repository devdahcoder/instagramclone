import React, {useState, useEffect} from 'react'
import "./assets/style/index.css"
import PostItem from "../PostItem/PostItem"
import { v4 as uuid } from "uuid";




const PostDisplay = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://randomuser.me/api/?results=50")
            .then (response => {
                if (response.ok) {
                    return response.json()
                }
                throw response;
            })
            .then(data => {
                console.log(data.results)
                setPosts(data.results)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])



    return (
        <div className="post-display">
            {posts.map((post) => (<PostItem key={uuid()} post={post} />))}
        </div>
    )
}

export default PostDisplay
