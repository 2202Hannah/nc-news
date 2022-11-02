import { useState, useEffect } from "react";
import { postComment } from "../utils";

const CommentPoster = ({ setComments, article_id }) => {
  const [newComment, setNewComment] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    setComments(currComments => {
      return [newComment, ...currComments];
    });
  }, [setNewComment]);

  const handleSubmit = event => {
    event.preventDefault();

    postComment(article_id, newComment, username).then(data => {});

    setNewComment("");
    setUsername("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          required
          value={username}
          onChange={event => setUsername(event.target.value)}
        />
      </label>
      <label>
        Add a new comment:
        <input
          required
          value={newComment}
          onChange={event => setNewComment(event.target.value)}
        />
      </label>
      <button type="submit">Add Comment</button>
    </form>
  );
};

export default CommentPoster;
