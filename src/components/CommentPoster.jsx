import { useState, useContext } from "react";
import { postComment } from "../utils";
import LoadingSpinner from "./LoadingSpinner";
import "./styles.css";

import UserLoginContext from "../context/UserLoginContext"

const CommentPoster = ({ setComments, article_id }) => {
  const {user} = useContext(UserLoginContext);
  
  const [username, setUsername] = useState("");
  const [newCommentBody, setNewCommentBody] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    setErrorMessage("");
    setIsLoading(true);
    postComment(article_id, newCommentBody, user)
      .then(data => {
        setComments(currComments => {
          return [data, ...currComments];
        });
        setSuccessMessage("Your message has been posted!");
        setNewCommentBody("");
        setUsername("");
        setIsLoading(false);
      })
      .catch(() => {
        setErrorMessage("Unable to post comment, please log in and try again");
        setIsLoading(false);
        setNewCommentBody("");
        setUsername("");
      });
  };

  const renderComments = (
    <div className="userlist-container">
    <form onSubmit={handleSubmit}>
      <label>
        Add a new comment:
        <input
          required
          value={newCommentBody}
          onChange={event => setNewCommentBody(event.target.value)}
        />
      </label>
      <button type="submit">Comment</button>
      <p className="success">{successMessage}</p>
    </form>
    </div>
  );
  return (
    <div className="commentPoster">
      {isLoading ? <LoadingSpinner /> : renderComments}
      {errorMessage && <div className="error">{errorMessage}</div>}
    </div>
  );
};

export default CommentPoster;
