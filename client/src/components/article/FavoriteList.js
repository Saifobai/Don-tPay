import React, { useState, useEffect } from "react";

import axios from "../../util/axiosInstance";
import { Link, useParams } from "react-router-dom";
import "./FavoritesList.scss";
import HeroImage from "../../components/heroImage/HeroImage";
import LocationOnIcon from '@mui/icons-material/LocationOn';


function FavoriteList() {
  const [articles, setArticles] = useState([]);
  const [owner, setOwner] = useState([]);

  const [refresh, setRefresh] = useState(false);

  const favoriteArticles = async () => {
    try {
      const response = await axios.get("/user/favorites");
      setArticles(response.data.favorite);
      setOwner(response.data.favorite.user_id);
    } catch (error) {
      console.log(error.message);
    }
  };

  const removeFromFavoriteList = async (id) => {
    try {
      await axios.get(`/user/favorites/remove/${id}`);
      setRefresh(!refresh);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    favoriteArticles();
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }, [refresh]);

  return (
    <div className="favorite_list">

      <div className="heroImage">
        <HeroImage />
      </div>
      <h2>Favorites</h2>
     <div className="favorite_container">  
     {articles.length !== 0 ? (
      articles.map((article) => {
        return (

          <>
            <Link key={article} to={`/category/${article.category}/${article._id}`} className="article">
              <img src={`${process.env.REACT_APP_SERVER_URL}/${process.env.REACT_APP_IMGA}/${article.articleimage}`} alt="test for now" />
              <div className="thumbnail_text">
                <p>{article.articlename}</p>
                <div className="location">
                  <span className="icon"><LocationOnIcon /></span>
                  <span>{article.user_id.address.zipcode}</span>
                  <span>{article.user_id.address.city}</span>
                </div>
              </div>
            </Link>
          </>
        );
      })
    ) : (
      <h3>There is no any favorite item</h3>
    )}
     </div>
    </div>
  );
}

export default FavoriteList;
