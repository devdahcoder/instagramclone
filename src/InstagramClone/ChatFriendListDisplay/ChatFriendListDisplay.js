import React, {useEffect, useState} from 'react';
import "./style/chatfriendlistdisplay.css";
import {v4 as uuid} from "uuid";
import ChatFriendList from "../ChatFriendList/ChatFriendList" 

const ChatFriendListDisplay = () => {

    const [friendList, setFriendList] = useState([])

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
                setFriendList(data.results)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <div>
            {friendList.map((friendList) => (<ChatFriendList key={uuid} friendList={friendList} />) )}
        </div>
    )
}

export default ChatFriendListDisplay
