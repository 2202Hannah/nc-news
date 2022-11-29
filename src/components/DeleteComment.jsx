import "./styles.css";

import { useState, useContext } from "react";
import { deleteComment } from "../utils";

import LoadingSpinner from "./LoadingSpinner";
import UserLoginContext from "../context/UserLoginContext";

const DeleteComment = ({ comment_id, author, comments, setComments }) => {
  const { user } = useContext(UserLoginContext);

  const [setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = () => {
    setIsLoading(true);
    setErrorMessage("");

    deleteComment(comment_id)
      .then(() => {
        setComments(currComments => {
          return currComments.filter(
            comment => comment.comment_id !== comment_id
          );
        });
        setIsLoading(false);
      })
      .catch(() => {
        setErrorMessage("Unable to post comment, please log in and try again");
        setIsLoading(false);
      });
  };

  if (user === author) {
    return isLoading ? (
      <LoadingSpinner />
    ) : (
      <button onClick={handleDelete}>Delete</button>
    );
  }
};

export default DeleteComment;
