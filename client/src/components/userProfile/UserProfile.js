
import React, { useEffect, useState } from "react";
import axios from "../../util/axiosInstance";
import { useParams, Link } from "react-router-dom";
import "./userprofile.scss";
import HeroImage from "../../components/heroImage/HeroImage";
import defaultImage from '../../Images/unnamed.png';


function UserProfile() {

    const { id } = useParams();

    const [user, setUser] = useState([]);
    const [image, setImage] = useState("");
    const [address, setAddress] = useState([]);

    const getuser = async () => {
        const response = await axios.get(`/user/userprofile/${id}`);
        setUser(response.data.user);
        setImage(response.data.user.userimage);
        setAddress(response.data.user.address);
    };

    useEffect(() => {
        getuser();
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          })
    }, []);

    return (

        <div className="profile_setting">
            <div className="heroImage">
                <HeroImage />
            </div>

            <div className="container_profile">
                <div className="user_profile">
                    <h1>My Profile</h1>
                    <div className="profile_img">
                        <img
                            src={image !== null ? `${process.env.REACT_APP_SERVER_URL}/${process.env.REACT_APP_IMGU}/${image}` : defaultImage}
                            alt="user_image"
                        />
                    </div>
{console.log("image",image)}
                    <div className="profile_details">
                        <h3>username: {user.username}</h3>
                        <h3>firstname: {user.firstname}</h3>
                        <h3>lastname: {user.lastname}</h3>
                        <h3>email: {user.email}</h3>
                        <h3>city: {address.city}</h3>
                        <h3>hausnumber: {address.hausnumber}</h3>
                        <h3>land: {address.land}</h3>
                        <h3>streetname: {address.streetname}</h3>
                    </div>

                    <div className="edit_link">
                        <Link to={`/userprofile/${id}/edituser`}>Edit</Link>
                    </div>

                    <div>
                        <img src={`${process.env.REACT_APP_SERVER_URL}${process.env.REACT_APP_IMG}/${image}`} alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default UserProfile;
