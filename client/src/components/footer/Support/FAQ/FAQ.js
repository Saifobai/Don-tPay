import React, { useEffect } from 'react'
import './faq.scss'
import HeroImage from '../../../heroImage/HeroImage';


function FAQ() {

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
    }, [])
    
    return (
        <div className="container_faq">
            <div className="heroImage">
                <HeroImage />
            </div>

        <h2>What is The Aim of Don't Pay</h2> <br />
        <p>Don't Pay is a kind of barter that transacting business without the use of cash. You can buy what you need and pay for it with what you have. A sale is made that would not have been if cash were required. Plus, there is an immediate increase in cash flow when one trades for an expense that would otherwise be paid for in cash.</p>
        <br /><hr />

        <br /><h3>What Are The Adventure of Don't Pay</h3><br />
        <p>There are several, with the foremost being new business. Don't Pay provides you with new clients and allows you to expand your market beyond your cash-paying accounts. Don't Pay also helps in conserving cash. Instead of spending cash to purchase goods and services, you can barter your own goods and services to pay for those things you need. Thus, more cash stays within your business, providing increased cash flow. Barter puts idle resources to work. Excess time, inventory, and capacity are converted into profits.</p>
        <br /><hr />

        <br /><h3>Why Join Don't Pay</h3><br />
        <p>The problem with the one-on-one trading that you are accustomed to is that each business owner must need exactly what the other has to offer. In the Don't Pay network, everyone trades with everyone regardless of what the other person has to offer.</p>
        <br /><hr />

        <br /><h3>How Do I Get Started In Dont Pay</h3><br />
        <p>Simply go the the Sign Up section of this website and fill out the form. then you can become a member and get the most from you Don't Pay membership.</p>
        <br /><hr />

        <br /><h3>How Do I Know The Members of Don't Pay Are Quality Providers</h3><br />
        <p>Don't Pay will search various databases and online review sites to see if there are any issues with any customer before we activate them.We have a short leash for incompetence or misbehavior…it is only fair to the collective membership.</p>
        <br /><hr />
        </div>

    )
}

export default FAQ
