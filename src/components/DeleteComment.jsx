import { useState } from "react";
import { deleteComment } from "../utils";
import LoadingSpinner from "./LoadingSpinner";
import "./styles.css";

const DeleteComment = ({ comment_id, author, user, comments, setComments }) => {
  const [errorMessage, setErrorMessage] = useState("");
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
