import React, { useEffect, useState } from "react";
import axios from "../../util/axiosInstance";
import { Link } from "react-router-dom";
import "./categoriesList.scss";
import HeroImage from "../../components/heroImage/HeroImage";

import electronicsImage from '../../Images/category/electronics.jpg';
import sportImage from '../../Images/category/sport.jpg';
import homeImage from '../../Images/category/Furniture.jpg';
import toolsImage from '../../Images/category/tools.jpg';
import booksImage from '../../Images/category/books.jpg';
import fashionImage from '../../Images/category/fashion.jpg';
import musicImage from '../../Images/category/music.jpg';
import vehicleImage from '../../Images/category/Vehicle.jpg';
import collectablesImage from '../../Images/category/collectables.jpg';
import servicesImage from '../../Images/category/services.jpg';


// 2 september

function CategoriesList() {
  const [categories, setCategories] = useState([]);

  const getAllCategories = async () => {
    try {
      const response = await axios.get("/article/categorieslist");
      setCategories(response.data.categories);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategories();

    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }, []);

  return (
    <div>
      <div className="heroImage">
        <HeroImage />
      </div>
      <div id="category" className="category">
        {categories.map((item) => (
          <div className="category_card">
{/*          <div className="middle">
            <div className="text">{item}</div>
        </div>*/}
            <Link className="category_link" key={item} to={`/category/${item}`}>
              <div className="category_image">
                <img src={item === "electronics" ? electronicsImage : item === "sports" ? sportImage : item === "home" ? homeImage : item === "tools" ? toolsImage : item === "books" ? booksImage : item === "vehicels" ? vehicleImage : item === "music" ? musicImage : item === "fashion" ? fashionImage : item === "services" ? servicesImage : item === "collectables" ? collectablesImage : ""} alt={item} />
              </div>
              <div className="category_title">
                <p style={{textTransform: "uppercase"}}>{item}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoriesList;
