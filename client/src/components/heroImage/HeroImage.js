import React, {useEffect, useState} from 'react';
import './heroImage.scss';
import Box1 from '../framerMotion/Box1'
import Box2 from '../framerMotion/Box2'
import banner from '../../Images/heroImages/banner2.jpg';

function HeroImage() {

    return (
        <div className="hero_banner">
        <img  src={banner} alt="homepage hero" />

        <h1> Exchange free & <br></br>
             And Enjoy the Moment</h1>

             <Box1 />
             <Box2 />
        </div>
    )
}

export default HeroImage
