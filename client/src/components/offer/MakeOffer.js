import React, { useState, useEffect, useContext } from 'react';
import axios from '../../util/axiosInstance';
import { ContextAPI } from '../../store/context';
import { Draggable, Droppable } from 'react-drag-and-drop';
import './makeOffer.scss';

function MakeOffer() {

    const [article, setArticles] = useState([]);
    const { userId } = useContext(ContextAPI);

    const [drop, setDrop] = useState([]);
    const [walet, setWalet] = useState([]);

    const getMyArticle = async () => {
        try {
            const response = await axios.get(`/user/myarticle/user/${userId}`);
            setArticles(response.data.article)
            setWalet(response.data.article)
        } catch (error) {
            console.log(error);
        }
    }

    const handleDrop = (data) => {
        console.log(data);
        const droppedArticle = article.find((item) => item._id === data.article);
        setDrop([...drop, droppedArticle]);
        const indexDroppedArticle = article.indexOf(droppedArticle);
        const restItem = walet.splice(indexDroppedArticle, 1)
    }


    useEffect(() => {
        getMyArticle()
    }, [])


    return (
        <div className="offer_container">
            <div style={{ display: "flex" }}>
                <ul className="SmoothieOne" >
                    {walet.map(item => <Draggable key={item._id} type="article" data={item._id}><li>{item.articlename}</li></Draggable>)}
                </ul>
                <Droppable className="Droppable"
                    types={['article']}
                    onDrop={handleDrop}
                >
                    <ul className="SmoothieTwo" >
                        {drop.map(item => <li>{item.articlename}</li>)}
                    </ul>
                </Droppable>
            </div>
        </div>
    )
}

export default MakeOffer


