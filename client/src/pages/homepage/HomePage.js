import React, { useEffect, useState, useContext } from 'react';
import './homepage.scss';
import axios from '../../util/axiosInstance';
import { Link } from 'react-router-dom';
import { ContextAPI } from '../../store/context';
import Slider from '../../components/carousel/Slider';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AOS from 'aos';
 

function HomePage() {

    const [newArticles, setNewArticles] = useState([]);
    const [allArticles, setAllArticles] = useState([]);

    const { search } = useContext(ContextAPI);

    const articles = async () => {
        try {
            const response = await axios.get('/article/new');

            setNewArticles(response.data.articles)
            setAllArticles(response.data.allArticles)
        } catch (error) {
            console.log(error.message);
        }
    } 

    useEffect(() => {
        articles()
        AOS.init();
    }, [])

    return (
        <div className="homepage">
            <Slider />
            <div className="container_center">
                <div className="container_articles">
                    {newArticles.length === 0 ? <h1>there is no articles</h1> : search ? allArticles.filter(item => item.articlename.toLowerCase().startsWith(search.toLowerCase()) || item.user_id.address.city.toLowerCase().startsWith(search.toLowerCase())).map(article => {
                        return (
                            <Link to={`/category/${article.category}/${article._id}`} key={article._id} className="article" data-aos="fade-up">
                                <img src={`${process.env.REACT_APP_SERVER_URL}/${process.env.REACT_APP_IMGA}/${article.articleimage}`} alt="test for now" />
                                <div className="thumbnail_text">
                                    <p>{article.articlename}</p>
                                    <div className="location">
                                    <span className="icon"><LocationOnIcon/></span>
                                    <span>{article.user_id.address.zipcode}</span>
                                    <span>{article.user_id.address.city}</span>
                                    </div>
                                </div>
                            </Link>
                        )
                    }) : newArticles.map(article => {
                        return (
                            <Link to={`/category/${article.category}/${article._id}`} key={article._id} className="article" data-aos="fade-up">
                                <img src={`${process.env.REACT_APP_SERVER_URL}/${process.env.REACT_APP_IMGA}/${article.articleimage}`} alt="test for now" />
                                <div className="thumbnail_text">
                                    <p>{article.articlename}</p>
                                    <div className="location">
                                    <span className="icon"><LocationOnIcon/></span>
                                    <span>{article.user_id.address.zipcode}</span>
                                    <span>{article.user_id.address.city}</span>
                                    </div>
                                </div>
                            </Link> )
                    })}
                </div>
            </div>
        </div>
    )
}

export default HomePage;

