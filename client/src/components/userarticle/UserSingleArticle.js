import React, { useState, useEffect, useContext } from "react";
import axios from "../../util/axiosInstance";
import { useParams, Link, useHistory } from "react-router-dom";
// import './SingleArticleStyle.scss';
import { ContextAPI } from "../../store/context";
import HeroImage from "../../components/heroImage/HeroImage";

// 2 september

function UserSingleArticle() {
  const history = useHistory();

  const { userId } = useContext(ContextAPI);

  const { articleId } = useParams();

  const [selectedArticle, setSelectedArticle] = useState([]);


  const {
    articlename,
    description,
    status,
    note,
    category,
    quantity,
    articleimage,
    created,
  } = selectedArticle;

  const myArticle = async () => {
    try {
      const response = await axios.get(`/user/myarticle/${articleId}`);
      setSelectedArticle(response.data.article);
    } catch (error) {
      console.log(error);
    }
  };

  const removeArticle = async (category, id) => {
    try {
      await axios.delete(`/article/category/${category}/${id}`);
      history.push(`/category/${category}`);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    myArticle();
  }, []);

  return (
    <div className="single_article">
      <h1>hello</h1>
      <div className="heroImage">
        <HeroImage />
      </div>

      <div className="image_delete">
        <div className="image">
          <img
            src={`${process.env.REACT_APP_SERVER_URL}/${process.env.REACT_APP_IMGA}/${articleimage}`}
            alt=""
          />
        </div>
        <div className="delete">
          <button onClick={() => removeArticle(category, articleId)}>Delete Item</button>
        </div>
      </div>
      <div className="details">
        <div className="title">
          <h2>{articlename}</h2>
          <p>Status: {status}</p>
          <p>Note : {note}</p>
          <span className="create_date">
            {new Date(created).toLocaleDateString()}
          </span>
        </div>
        <div className="description">
          <h3>Description</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default UserSingleArticle;
