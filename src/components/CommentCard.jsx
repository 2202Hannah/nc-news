import "./styles.css";
import Moment from "react-moment";
import "moment-timezone";


import CommentVoter from "./CommentVoter";
import DeleteComment from "./DeleteComment";

const CommentCard = ({
  comment_id,
  author,
  commentBody,
  createdAt,
  commentVotes,
  setComments,
  comments
}) => {
  return (
    <div className="commentCard">
      <h4>{author}</h4>
      <Moment fromNow>{createdAt}</Moment>
      <CommentVoter comment_id={comment_id} votes={commentVotes} />
      <p>{commentBody}</p>
      <DeleteComment comment_id={comment_id} author={author} comments={comments} setComments={setComments}/>
    </div>
  );
};

export default CommentCard;
