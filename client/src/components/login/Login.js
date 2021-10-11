import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "../../util/axiosInstance";
import { ContextAPI } from "../../store/context";
import HeroImage from "../../components/heroImage/HeroImage";
import './login.scss';

function Login() {
  const history = useHistory();
  const { handleLogin } = useContext(ContextAPI);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [messageAlert, setMessageAlert] = useState("");

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/user/login", {
        username: username,
        password: password,
      });
      setMessageAlert(response.data.message)
      console.log(response.data.token, response.data);
      if (response.status === 200) {
        handleLogin(
          true,
          response.data.token,
          response.data.userID,
          response.data.username
        );
        history.push("/");
      } 
    } catch (error) {
      console.log(error.message);
      handleLogin(false, null);
      
    }
  };

  return (
    <div className="login_container">
    
      <div className="heroImage">
        <HeroImage />
      </div>

      <div className="container_login">
        <h1>User Login</h1>
        {messageAlert ? <h3>{messageAlert}</h3> : ""}
        <div className="form">
          <form onSubmit={handleSubmitForm}>
            <div className="user">
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  name="username"
                  id="username"
                  placeholder="username"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                />
                <button type="submit">Login</button>
            </div>
            <div className="login">
              <input type="checkbox" id="loggedIn" />
              <label htmlFor="loggedIn">Keep me logged in</label>
            </div>
            <div className="forgot_password">
              <Link to="/forgotPass">Forgot Password?</Link>
            </div>
{console.log(messageAlert)}

          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
