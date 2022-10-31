import "./styles.css";

const CommentCard = ({ author, commentBody, createdAt, commentVotes }) => {
  return (
    <div className="commentCard">
      <h3>{author}</h3>
      <h4>{createdAt}</h4>
      <p>VOTES: {commentVotes}</p>
      <p>{commentBody}</p>
    </div>
  );
};

export default CommentCard;
