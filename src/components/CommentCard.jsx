import "./styles.css";
import Moment from "react-moment";
import "moment-timezone";

const CommentCard = ({ author, commentBody, createdAt, commentVotes }) => {

  return (
    <div className="commentCard">
      <h4>{author}</h4>
      <Moment fromNow>{createdAt}</Moment>
      <p>VOTES: {commentVotes}</p>
      <p>{commentBody}</p>
    </div>
  );
};

export default CommentCard;
