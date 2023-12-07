import "./styles.css";

import { useState, useContext } from "react";
import { fetchUsers } from "../utils";

import Logo from "./Logo"
import LoadingSpinner from "./LoadingSpinner";
import UserLoginContext from "../context/UserLoginContext"
import LoginPage from "./LoginPage"

const Nav = () => {
  const { setUser } = useContext(UserLoginContext);
  
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [clicked, setClicked] = useState(false)


  const handleClick = () => {
    setClicked(true)
  }
  const handleSubmit = event => {
    event.preventDefault();
    setErrorMessage("");
    setIsLoading(true);
    fetchUsers()
      .then(data => {
        data.map(user => {
          if (user.username === username) {
            setUser(username);
            setSuccessMessage(`You are now logged in as ${username}`);
            setUsername("");
            setIsLoading(false);
            return user;
          }
        });
      })
      .catch(() => {
        setErrorMessage("Unable to log in, please try again");
        setIsLoading(false);
        setUsername("");
      });
  };

  const renderNav = (
    <div className="loginBar">
      <h1 id="nav-title">STAPLETON NEWS</h1>
      {/* <button>signup</button> */}
      <button onClick={handleClick}>login</button>
      {/* <Logo id="nav-title" /> */}
      {/* <form id="login" onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            required
            name="username"
            value={username}
            onChange={event => setUsername(event.target.value)}
          />
        </label>
        <button type="submit">Login</button>
      </form>
  // <p className="success">{successMessage}</p>*/}
  </div>
  );

  return clicked === true ?  <LoginPage /> :
  (
    <div className="loginPoster">
      {isLoading ? <LoadingSpinner /> : renderNav}
      {errorMessage && <div className="error">{errorMessage}</div>}
    </div>
  );
};

export default Nav;
