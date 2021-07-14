import React, {useState, useEffect} from 'react'
import "./assets/style/index.css"
import PostItem from "../PostItem/PostItem"
import { v4 as uuid } from "uuid";




const PostDisplay = () => {

    const [posts, setPosts] = useState([]);
    const [postsImage, setPostsImage] = useState([]);

    useEffect(() => {
        fetch("https://randomuser.me/api/?results=10")
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

    useEffect(() => {
        fetch("https://api.unsplash.com/photos/?client_id=8mb5eGQc4973c_ChY-M_D1Zdynhimy4Ompb0Lam36Hw")
            .then (response => {
                if (response.ok) {
                    return response.json()
                }
                throw response;
            })
            .then(data => {
                console.log(data)
                setPostsImage(data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])



    return (
        <div className="post-display">
            {posts.map((post, index) => (<PostItem key={uuid()} index={index} post={post} postsImage={postsImage} />))}
        </div>
    )
}

export default PostDisplay
