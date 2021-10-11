import React, { useState, useEffect } from "react";
import axios from "../../util/axiosInstance";
import { useParams } from "react-router-dom";
import "./userEdit.scss";
import HeroImage from "../../components/heroImage/HeroImage";

function EditUser() {
  const { id } = useParams();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [streetname, setStreetname] = useState("");
  const [hausnumber, setHausnumber] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [city, setCity] = useState("");
  const [land, setLand] = useState("");

  const handelUpdates = async (e) => {
    e.preventDefault();

    const response = await axios.put(`/user/userprofile/${id}/edituser`, {
      email: email,
      password: password,
      phoneNumber: phoneNumber,
      address: {
        streetname: streetname,
        hausnumber: hausnumber,
        zipcode: zipcode,
        city: city,
        land: land,
      },
    });
  };

  return (
    <div className="user_edit">
      <div className="heroImage">
        <HeroImage />
      </div>

      <div className="form_container">

      <h1>Update user Account</h1>
        <form onSubmit={handelUpdates}>
          <div className="email">
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              name="email"
              placeholder="E-Mail"
              required
            />
          </div>

          <div className="phone">
            <input
              onChange={(e) => setPhoneNumber(e.target.value)}
              type="text"
              id="phone"
              name="phone"
              placeholder="Phone Number"
              required
            />
          </div>

          <div className="address">
            <input
            className="street"
              onChange={(e) => setStreetname(e.target.value)}
              type="text"
              placeholder="Street"
              name="street"
              required
            />
            <input
            className="house"
              onChange={(e) => setHausnumber(e.target.value)}
              type="text"
              placeholder="Nr."
              name="hausnumber"
              required
            />
            <input
            className="code"
              onChange={(e) => setZipcode(e.target.value)}
              type="text"
              placeholder="Zip Code"
              name="zip"
              required
            />
            <input
            className="city"
              onChange={(e) => setCity(e.target.value)}
              type="text"
              placeholder="City"
              name="city"
              required
            />
            <input
            className="land"
              onChange={(e) => setLand(e.target.value)}
              type="text"
              placeholder="Land"
              name="land"
              required
            />
          </div>

          <div className="password">
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              name="password"
              placeholder="Your Password"
              required
            />
            <label htmlFor="password">
            put your password to confirm changes
          </label>
          </div>

          <div className="button">
            <button type="submit">update changes</button>
          </div>
        </form>
      </div>

      {console.log(streetname)}
    </div>
  );
}

export default EditUser;
