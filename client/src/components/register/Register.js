import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../../util/axiosInstance";
import HeroImage from "../../components/heroImage/HeroImage";
import "./register.scss";

function Register() {
  const [firstname, setfirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [streetname, setStreetname] = useState("");
  const [hausnumber, setHausnumber] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [city, setCity] = useState("");
  const [age, setAge] = useState("");
  const [land, setLand] = useState("");

  const handelRegister = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    try {
      const res = await axios.post("/user/imageupload", formData, {
        headers: {
          "content-Type": "multipart/form-data",
        },
      });

      await axios.post("/user/register", {
        firstname: firstname,
        lastname: lastname,
        username: username,
        password: password,
        age: age,
        email: email,
        phone: phoneNumber,
        userimage: res.data.image,
        address: {
          streetname: streetname,
          hausnumber: hausnumber,
          zipcode: zipcode,
          city: city,
          land: land,
        },
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
   }, []);

  return (
    <div className="register">
      <div className="heroImage">
        <HeroImage />
      </div>

      <div className="container_register">
        <h1>User Register</h1>

        <Link to="/login" />

        <form onSubmit={handelRegister}>
          <div className="fullname">

            <input
              onChange={(e) => setfirstname(e.target.value)}
              type="text"
              id="firstname"
              name="firstname"
              placeholder="First Name"
              required
            />

            <input
              onChange={(e) => setLastname(e.target.value)}
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Last Name"

              required
            />

            <input
              className="age"
              onChange={(e) => setAge(e.target.value)}
              type="text"
              id="age"
              name="age"
              placeholder="Age"
              maxLength="2"
              required
            />
          </div>

          <div className="email">

            <input
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              id="username"
              name="username"
              placeholder="username"
              required
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
            />

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

          <div className="upload">
            <input
              className="upload_image"
              accept="image/*"
              type="file"
              name="photo"
              id="img1"
              style={{ display: "none" }}
            />
            <label htmlFor="img1">upload photo</label>
          </div>

          <div className="agree">
            <input type="checkbox" id="check" required />
            <label htmlFor="check">I Agree to terms and condition</label>
          </div>

          <div className="button">
            <button type="submit">Create</button>
          </div>
        </form>
      </div>
      {console.log("registerpage")}
    </div>
  );
}

export default Register;
