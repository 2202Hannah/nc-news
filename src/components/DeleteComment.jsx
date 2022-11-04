import { useState } from "react";
import { deleteComment } from "../utils";

const DeleteComment = ({ comment_id, author, user }) => {
  const [err, setErr] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = () => {
    setIsLoading(true);
    setErr(null);

    if (author === user) {
      deleteComment(comment_id)
        .then(data => {
          console.log(data);
        })
        .catch(err => {
          setErr("Something went wrong, please try again.");
        });
    } else {
      setErr(`Log in as ${user} to delete this comment`);
    }
  };

  return <button onClick={handleDelete}>Delete</button>;
};

export default DeleteComment;
