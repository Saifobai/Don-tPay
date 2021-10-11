import React, { useState, useEffect } from 'react';
import axios from '../../util/axiosInstance';
import ChatRooms from './ChatRooms';
import './inbox.scss';

function Inbox() {

    const [chatRoom, setChatRoom] = useState([])

    const showMessage = async () => {
        try {
            const response = await axios.get('/message/showmessages');
            setChatRoom(response.data.messages)
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        showMessage()
    }, [])


    return (
            <div className="conversaition">
            <h1>Inbox</h1>
                {chatRoom.length !== 0 ? chatRoom.map(item => item.article_id !== null ? <ChatRooms item={item} /> : "" ) : <h1>There are no messages in your inbox</h1>}
                {console.log(chatRoom)}
            </div>

    )
}

export default Inbox
