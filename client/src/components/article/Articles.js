import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import './articles.scss';


// 2 september


// useEffect(() => {

//     window.scroll({
//         top: 0,
//         left: 0,
//         behavior: 'smooth'
//       })
// }, [])

function Articles({ article, category, itemId }) {


    return (
        <Link key={itemId} to={`/category/${category}/${article._id}`} className="article">
            <img src={`${process.env.REACT_APP_SERVER_URL}/${process.env.REACT_APP_IMGA}/${article.articleimage}`} alt="test for now" />
            <div className="thumbnail_text">
                <p>{article.articlename}</p>
                <p>Note : {article.note}</p>
            </div>
        </Link>
    )
}

export default Articles
