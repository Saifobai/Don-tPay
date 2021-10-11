import React, { useEffect } from 'react'
import './impressum.scss'
import HeroImage from '../../heroImage/HeroImage';

function Impressum() {

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
    }, [])
    
    return (
        <div className="container_impressum">

            <div className="heroImage">
                <HeroImage />
            </div>
            <div className="details_impressum">
            <h2>Managing Director</h2>
            <ul>
                <li>Mohamad Alhussaini</li>
                <li>Saif Alobaidi</li>
                <li>Mohammad Firas Sharaf</li>
            </ul>
            <h2>Commercial register</h2>
            <ul>
                <li>HRB 9219</li>
                <li>District Court Steinfurt</li>
                <li>Tax number : 19 8745621</li>
                <li>VAT ID number : DE8489894</li>

            </ul>

            <h2>Contact</h2>
            <ul>
                <li>Email: info@dontpay.eu</li>
                <li>Tel: 016371 467900</li>
                <li>Fax: 06371 46792222</li>
            </ul>

            </div>
        </div>
    )
}

export default Impressum
