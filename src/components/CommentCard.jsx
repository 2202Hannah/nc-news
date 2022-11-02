import "./styles.css";
import Moment from "react-moment";
import "moment-timezone";
import CommentVoter from "./CommentVoter";

const CommentCard = ({
  comment_id,
  author,
  commentBody,
  createdAt,
  commentVotes
}) => {
  return (
    <div className="commentCard">
      <h4>{author}</h4>
      <Moment fromNow>{createdAt}</Moment>
      <CommentVoter comment_id={comment_id} votes={commentVotes} />
      <p>{commentBody}</p>
    </div>
  );
};

export default CommentCard;
