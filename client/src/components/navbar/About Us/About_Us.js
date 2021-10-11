import React, { useEffect } from 'react'
import './about_us.scss'
import HeroImage from "../../../components/heroImage/HeroImage";

function About_Us() {

 
    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [])
    return (
        <div className="Container_About_Us">


<div className="heroImage">
    <HeroImage />
  </div>


          <div className="about_container">
          <h2>Save the planet, bring the things thrown into storage to life, enjoy, trade and share what you've exchanged on our website.</h2>
            <div className="Container_child">
                <ul>
                    <li>The world's consumption of goods and products has increased dramatically and there are some cheap or expensive products that we don't use more.</li><br />
                    <li>If we think a little bit, we'll find that we have at least one thing we don't use in the store, and we often think we'll use it, but after a while we'll post it on user sales sites.
                        Like eBay kleinanzeige,If we don't succeed to selling it, we have to throw it.</li><br />
                    <li>Here comes the role of Don't Pay whatever thing you don't use with a device with something you might need more without having to throw or offer to sell and also there are amateurs who are very interested in bartering valuables and then for each level of a paid account and certainly there is a simple free account where you can trade what you don't need for something you need more.</li>
                </ul>
            </div>
          </div>
        </div>
    )
}

export default About_Us
