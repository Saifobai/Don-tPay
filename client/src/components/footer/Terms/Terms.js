import React, { useEffect } from 'react'
import './terms.scss'
import HeroImage from '../../heroImage/HeroImage'


function Terms() {

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
    }, [])

    return (
        <div className="container_terms">

        <div className="heroImage">
            <HeroImage />
        </div>


        <h1>What does exchange mean in a legal sense?</h1>

        <p>Amazingly, the term “exchange” does not appear anywhere in the law. Strictly speaking, exchange is not a legal term, but it is widely used in everyday life and is used for completely different case constellations.
            By and large, three different groups of cases of exchange can be formed.</p>

        <ol>
            <li> The purchased goods are defective and the buyer wants to exchange the defective goods for working goods.</li>
            <li>The purchased goods are defective and the buyer wants to return the defective goods and get back the purchase price paid.</li>
            <li>The purchased goods are flawless, but the buyer does not want to keep the goods for certain reasons, so they want to return the goods and get their purchase price back.</li>

        </ol>

        <p>In cases 1 and 2, the originally purchased goods are defective, whereas in the third case the goods are flawless. These findings are of great importance for the question of whether and how an exchange is carried out.</p>

<br />
        <h3>When is the buyer eligible for an exchange?</h3>
<br />
        <h4>Exchange of defective goods for flawless goods</h4>

        <p>The buyer's rights in the event of defects in the purchased item are regulated in Section 437 of the German Civil Code (BGB). If the purchased goods are defective, the buyer can initially demand supplementary performance in accordance with Section 439 (1) BGB. He has the right to vote in this regard. The buyer can either request the repair of the defective goods or the delivery of defect-free goods. The supplementary performance is also referred to as the right of the second tender and is intended to give the seller the opportunity to remedy the defect in the goods before the purchase contract is reversed. The seller can insist on this right.
        </p>
        <br />

        <h3>Exchange of defective goods against reimbursement of the purchase price</h3>

        <p>An exchange of defective goods for repayment of the purchase price represents a withdrawal in the legal sense. The right of the second tender means that withdrawal is only possible if the supplementary performance remains unsuccessful or is refused.
            The seller can refuse the type of supplementary performance chosen by the buyer (repair or new delivery) in accordance with Section 439 (4) BGB if it is either associated with disproportionately high costs or is obviously impossible, e.g. new delivery of unique items. In this case, the buyer's claim is limited to the other type of supplementary performance.
            Only if both types of supplementary performance have failed can the buyer withdraw according to §§ 437 No. 2, 440, 323 Paragraph 1, 346 Paragraph 1 BGB.
            If the conditions for withdrawal are met, the seller has to repay the purchase price and the buyer has to return the defective goods.
        </p>
        <br />

        <h3>Purchase from private individuals</h3>

        <p>If you order goods from a private person, for example via dont Pay, the right of withdrawal does not apply.
        </p>
<br />
        <h2>Important: The exchange depends on the agreement between the two parties as well as the exchange fees and the company is not responsible.
        </h2>


    </div>
    )
}

export default Terms
