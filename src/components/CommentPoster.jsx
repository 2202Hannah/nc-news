import { useState, useEffect } from "react";
import { postComment } from "../utils";

const CommentPoster = ({ setComments, article_id }) => {
  const [newComment, setNewComment] = useState("");
  const [username, setUsername] = useState("");
  const [newCommentBody, setNewCommentBody] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    postComment(article_id, newCommentBody, username).then(data => {
      console.log(data);
    });
    setComments(currComments => {
      return [newComment, ...currComments];
    });
    setNewCommentBody("");
    setUsername("");
  };

  // useEffect(() => {

  //   postComment(article_id, newCommentBody, username).then(
  //     (data) => {
  //       console.log(data);
  //       //setNewComment({ author, body, comment_id, created_at, votes });
  //     }
  //   );
  // }, []);

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
          value={newCommentBody}
          onChange={event => setNewCommentBody(event.target.value)}
        />
      </label>
      <button type="submit">Add Comment</button>
    </form>
  );
};

export default CommentPoster;
