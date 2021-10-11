import React, { useState, useEffect, useContext } from 'react';
import axios from '../../util/axiosInstance';
import { ContextAPI } from '../../store/context'
import { Link } from 'react-router-dom';
import './userArticleList.scss';
import noArticle from '../../Images/heroImages/noarticle.png';
import HeroImage from "../../components/heroImage/HeroImage";
import LocationOnIcon from '@mui/icons-material/LocationOn';


function UserArticleList() {

    const [article, setArticles] = useState([]);
    const { userId } = useContext(ContextAPI)

    const getMyArticle = async () => {

        try {
            const response = await axios.get(`/user/myarticle/user/${userId}`);
            setArticles(response.data.article)
        } catch (error) {
            console.log(error);
        }
    }



    useEffect(() => {
        getMyArticle()
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          })
    }, [])


    return (
        <div className="container_article">
            <div className="heroImage">
                <HeroImage />
            </div>
            {article.length !== 0 ? <div className="article_card">
                {article.map(item => (
                    <Link key={item} to={`/category/${item.category}/${item._id}`} className="article">
                        <img src={`${process.env.REACT_APP_SERVER_URL}/${process.env.REACT_APP_IMGA}/${item.articleimage}`} alt="test for now" />
                        <div className="thumbnail_text">
                            <p>{item.articlename}</p>
                            <div className="location">
                                <span className="icon"><LocationOnIcon /></span>
                                <span>{item.user_id.address.zipcode}</span>
                                <span>{item.user_id.address.city}</span>
                            </div>
                        </div>
                    </Link>
                )
                )}


            </div> : <Link to="/add" className="no_article"><img src={noArticle} alt="add_article" /></Link>}
        </div>
    )
}

export default UserArticleList
