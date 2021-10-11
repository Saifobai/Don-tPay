

import React,{useState} from 'react'
import axios from "../../util/axiosInstance";

import './forgot.scss';
import HeroImage from "../../components/heroImage/HeroImage";

function ForgetPass() {

    const [email , setEmail] = useState("");


    const handelSubmitForm = async (e) => {
        e.preventDefault();

        try {
            await axios.post('/user/forget', {

                email: email
            })

           
        } catch (error) {
            console.log(error.message);
        }
    }


    return (
        <div>

<div className="heroImage">
        <HeroImage />
      </div>

            <div className="container_form">

                <h3>forgot password</h3>

                <form onSubmit={handelSubmitForm} className="form" action="" method="POST">
                    <div className="email">
                    <label htmlFor="email">Email</label>
                    <input
                     onChange={(e) => setEmail(e.target.value)}
                     type="email" name="email" id="email"/>
                    </div>

                  <div className="submit_btn">
                  <input type="submit" value="submit" />
                  </div>
                </form>
            </div>

            {console.log(email)}
            
        </div>
    )
}

export default ForgetPass
