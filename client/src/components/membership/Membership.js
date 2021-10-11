import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./member.scss";
import HeroImage from "../../components/heroImage/HeroImage";

function Membership() {
  const [membership, setMembership] = useState("");

  return (


    <div>

<div className="heroImage">
        <HeroImage />
      </div>

<div className="member_container">
      <div className="membership">
        <div className="basic">
          <Link to="/silver">
            {" "}
            Don'tPay <span>Platinum</span>{" "}
          </Link>
        </div>

        <div className="basic_member_details">
          <div className="info">
            <h3>
              Lorem ipsum,<p>Lorem ipsum dolor sit amet.</p>{" "}
            </h3>
            <h3>
              Lorem ipsum,<p>Lorem ipsum dolor sit amet.</p>{" "}
            </h3>
            <h3>
              Lorem ipsum,<p>Lorem ipsum dolor sit amet.</p>{" "}
            </h3>
            <h3>
              Lorem ipsum,<p>Lorem ipsum dolor sit amet.</p>{" "}
            </h3>
          </div>
        </div>

        <div className="basic_member_cost">
          <div className="info">
            <h2>Get Don'tPay Platinum</h2>

            <div className="basic_card_payment">
              <p>
                6 <span>months</span>{" "}
              </p>
              <p>
                $7.99/ <span> mo Save 50 %</span>{" "}
              </p>
            </div>

            <div className="btn_checkout">
              <button> <Link to="/platinum">CHECKOUT</Link> </button>
            </div>
          </div>
        </div>

        <div className="gold_member">
          <Link to="/silver">
            {" "}
            Don'tPay <span>Golden</span>{" "}
          </Link>
        </div>

        <div className="premium">
          <Link to="/silver">
            {" "}
            Don'tPay <span>Premium</span>{" "}
          </Link>
        </div>
      </div>
    </div>

    </div>
   
  );
}

export default Membership;
