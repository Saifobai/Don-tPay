import React, { useState, useEffect } from 'react';

import './chatRoom.scss';
import SingleChatRoom from './SingleChatRoom';

function ChatRooms({ item }) {

    const [id, setId] = useState("");
    const [reciever, setReciever] = useState("");


    useEffect(() => {

    }, [id, item])

    return (
        <div className="wrapper">
            <div className="chat_inbox">
                <div className="chat_article_room">
                    <div onClick={() => setId(item.article_id._id) & setReciever(item.reciever._id)} className="chat_head">
                        <div className="image"> <img
                        src={`${process.env.REACT_APP_SERVER_URL}/${process.env.REACT_APP_IMGA}/${item.article_id.articleimage}`} alt="" /></div>
                        <div className="username">{item.article_id.articlename}</div>
                    </div>
                </div>

                {id ? <SingleChatRoom key={item.article_id._id} id={id} setId={setId} reciever={reciever} /> : <div className="single_chatroom"></div>}
                </div>

        </div>
    )
}

export default ChatRooms
