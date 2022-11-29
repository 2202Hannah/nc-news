import { useEffect } from "react";
import { fetchComments } from "../utils";
import CommentCard from "./CommentCard";

const CommentList = ({ comments, setComments, article_id}) => {
  
  useEffect(() => {
    fetchComments(article_id).then(data => {
      setComments(data);
    });
  }, [article_id, setComments]);

  return comments.map(comment => {
    
    return (
      <div key={comment.comment_id} className="comment">
        <CommentCard
          comment_id={comment.comment_id}
          author={comment.author}
          commentBody={comment.body}
          createdAt={comment.created_at}
          commentVotes={comment.votes}
          comments={comments}
          setComments={setComments}
        />
      </div>
    );
  });
};

export default CommentList;
