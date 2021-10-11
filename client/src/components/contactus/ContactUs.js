import React, { useState } from "react";
import "./contactUs.scss";
import PersonIcon from "@mui/icons-material/Person";
import BusinessIcon from "@mui/icons-material/Business";
import SubjectIcon from "@mui/icons-material/Subject";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // ES6

import axios from "axios";

import HeroImage from "../../components/heroImage/HeroImage";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const styleIcon = {
  background: "#cc611e",
  fontSize: "55px",
  borderRadius: "100%",
  color: "white",
};

const styleIconTow = { fontSize: "30px", marginLeft: "10px" , color: "#cc611e"};
const styleThree = { fontSize: "25px", height: "285px", background: "#fff", marginTop: "10px" };

function ContactUs() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [company, setCompany] = useState("");
  const [loading, setLoading] = useState(false);

  const handleQuillChange = (value) => {
    setMessage(value);
  };

  const handleRequest = async (e) => {
    if (email && company && name && subject !== "") {
      if (message !== "") {
        e.preventDefault();
        setLoading(true);
        console.log({ email, message, name, subject, company });

        const body = {
          email,
          message,
          subject,
          name,
          company,
        };

        await axios
          .post("http://localhost:3030/mail", body, {
            headers: {
              "Content-type": "application/json",
            },
          })
          .then((res) => {
            alert("Email Sent Successfully");
            setLoading(false);
            console.log(res);
            window.location.reload();
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
          });
      } else {
        alert("Compose Email");
      }
    } else {
      alert("Please fill all required filled");
    }
  };

  return (
    <div>
      <div className="heroImage">
        <HeroImage />
      </div>

      <div className="container_contact">
        <h2> CONTACT US </h2>

        <div className="two_block">
          <div className="info_contact">
            <div className="phone">
              <PhoneIcon style={styleIcon} /> <span>838383773883</span>
            </div>
            <div className="email">
              <EmailIcon style={styleIcon} /> <span>email@email.com</span>
            </div>
            <div className="location">
              <AddLocationAltIcon style={styleIcon} /> <span>address 99</span>
            </div>
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                frameborder="0"
                style={{ border: "0", width: "100%", height: "340px" }}
                allowfullscreen
              ></iframe>
            </div>
            '
          </div>

          <div className="form_contact">
            <form onSubmit={handleRequest} method="post">
              <div className="form">
                <div className="form__wrapper">
                  <div className="form__title">
                    <h4 className="email_sending">{loading ? "Sending..." : "Send Email"}</h4>
                    {loading}
                  </div>
                  <div className="form__container">
                    <div className="form__containerItems">
                      <div className="form__containerItem">
                        <div className="form__containerItemName">
                          <label>Name</label>
                          <PersonIcon style={styleIconTow} />
                        </div>
                        <div className="form__containerItemField">
                          <input
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required={true}
                            type="text"
                            placeholder="Enter Your Name"
                          />
                        </div>
                      </div>
                      <div className="form__containerItem">
                        <div className="form__containerItemName">
                          <label>Email</label>
                          <EmailIcon style={styleIconTow} />
                        </div>
                        <div className="form__containerItemField">
                          <input
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required={true}
                            type="text"
                            placeholder="Enter Your valid Email"
                          />
                        </div>
                      </div>
                      <div className="form__containerItem">
                        <div className="form__containerItemName">
                          <label>Company</label>
                          <BusinessIcon style={styleIconTow} />
                        </div>
                        <div className="form__containerItemField">
                          <input
                            id="company"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            type="text"
                            placeholder="Enter Your Company Name"
                          />
                        </div>
                      </div>
                      <div className="form__containerItem">
                        <div className="form__containerItemName">
                          <label>Subject</label>
                          <SubjectIcon style={styleIconTow} />
                        </div>
                        <div className="form__containerItemField">
                          <input
                            id="subject"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            required
                            type="text"
                            placeholder="Add Subject"
                          />
                        </div>
                      </div>
                      <div className="form__containerItem">
                        <div className="form__container__Compose">
                          <button
                            disabled={loading}
                            onClick={handleRequest}
                            type="submit"
                            className="btn_btn_success"
                          >
                            Send
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="container__composeMail">
                  <label htmlFor="">Compose Mail</label>
                  <ReactQuill
                    style={styleThree}
                    id="message"
                    value={message}
                    onChange={handleQuillChange}
                    className="quill"
                    placeholder="Enter Content from here..."
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
