import { useState } from "react";
import { fetchUsers } from "../utils";
import LoadingSpinner from "./LoadingSpinner";
import "./styles.css";

const Login = ({ user, setUser }) => {
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    setErrorMessage("");
    setIsLoading(true);
    setUsername(event.target.username.value);
    
    fetchUsers()
      .then(data => {
        console.log(data);
        if (data.includes(username)) {
          setUser(username);
          setSuccessMessage(`You are now logged in as ${username}`);
          setUsername("");
          setIsLoading(false);
        }
      })
      .catch(() => {
        setErrorMessage("Unable to log in, please try again");
        setIsLoading(false);
        setUsername("");
      });
  };

  const renderLogin = (
    <div className="loginForm">
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input required name="username" />
        </label>
        {/* <label>
          Password:
          <input required value={password} />
        </label> */}
        <button type="submit">Login</button>
        <p className="success">{successMessage}</p>
      </form>
    </div>
  );
  return (
    <div className="loginPoster">
      {isLoading ? <LoadingSpinner /> : renderLogin}
      {errorMessage && <div className="error">{errorMessage}</div>}
    </div>
  );
};

export default Login;
