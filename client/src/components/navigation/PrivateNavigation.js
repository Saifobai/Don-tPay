import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../util/axiosInstance";
import './privateNavigation.scss';


export default function PrivateNavigation({ user, userId }) {

    const [image, setImage] = useState("");


    const getuser = async () => {
        const response = await axios.get(`/user/userprofile/${userId}`);
        setImage(response.data.user.userimage);
    };

    useEffect(() => {
        getuser();
    }, []);

    return (
        <>
            <span className="welcome">Welcome {user} </span>
            <div className="dropdown"> 
                <button className="dropbtn">My Account</button>
                <div className="dropdown-content">
                    <Link to="/myarticle">My Items</Link>
                    <Link to="/add">Add item</Link>
                    <Link to={`/userprofile/${userId}`}>Setting</Link>
                    <Link to="/inbox">Inbox</Link>
                </div>
            </div>
            <Link to={"/logout"}>Logout</Link>
        </>
    );
}