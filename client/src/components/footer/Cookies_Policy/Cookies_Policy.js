import React, { useEffect } from 'react'
import './cookies_policy.scss'
import HeroImage from '../../heroImage/HeroImage'

function Cookies_Policy() {

    
    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
    }, [])

    return (
        <div className="container_CookiesPolicy">
            <h2>Cookies Policy</h2><br />
            <p>Our website uses technology known as cookies in order to capture information regarding the use made of the Website. We inform you that we use cookies in order to facilitate your browsing on our Website, to identify you from other users, provide you with a better experience in its use, or to identify problems in order to improve our Website. Furthermore, should you consent to such, we will use cookies that will allow us obtain more information about your preferences and personalise our Website in accordance with your individual interests. The purpose of this cookie policy is to inform you in a clear and concise manner about the cookies used on our Website (the “Cookie Policy”). We inform you that this document is complemented by the Legal Notice, the Privacy Policy and the General Contracting Terms and Conditions, which in their entirety comprise the legal texts governing the Website. </p><br />

            <h3>WHAT ARE COOKIES?</h3><br />
            <p>A cookie is a file that is downloaded onto your computer in order to store data that can be updated and recovered by the entity responsible for its installation. The information gathered using the cookies may include the date and time of visits to the Website, the products consulted, pages visited, time spent on our Website and the websites visited immediately before and after. By using this information we can focus and adjust the services in the most effective manner in order to provide you with a better experience as a user.</p> <br />

            <h3>TYPES AND PURPOSES OF COOKIES</h3>
            <p>Cookies can be classified into a variety of categories depending on their characteristics. Our Website uses the cookies that are described as follows:</p><br />

            <h3>Own cookies</h3>
            <p>These are cookies that are sent to your computer and managed exclusively by ourselves in order to improve the functioning of the Website. The information we gather is used to improve the quality of our service and your experience as a user.</p><br />

            <h3>Third-party cookies</h3>
            <p>If you interact with the content of the Website, third-party cookies may also be installed. Third-party cookies are those installed by a domain other than our website. We cannot access the data stored on the cookies from other websites when you browse said websites. </p><br />

            <h3>“Analytical” cookies</h3><br />
            <p>These are cookies which, together with our server log files, allow us to know the total number of users visiting our Website and which parts are most popular. Thus we are able to obtain information that can help us improve browsing and provide a better service to users and customers. These types of cookies allow us to improve usability and experience when using our Website.</p><br />

            <h3>Personalisation cookies</h3><br />
            <p>These allow the user to access the services with some pre-defined characteristics of a general nature depending on a series of criteria on the user terminal, such as configuring the language when creating their account.</p><br />

            <h3>Session cookies</h3>
            <p>These types of cookies gather and store data only while the User is visiting the Website, such as the list of products that make up their order. Below follows a list of cookies that you may find on our Website and a brief description of their purpose.</p>
            <br />
            <p>When browsing and remaining on our Website you consent to the use of the cookies mentioned above, the periods detailed and the conditions contained in this Cookie Policy.</p>
        </div>
    )
}

export default Cookies_Policy
