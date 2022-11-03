import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchComments } from "../utils";
import CommentCard from "./CommentCard";

const CommentList = ({ comments, setComments, article_id }) => {
  useEffect(() => {
    fetchComments(article_id).then(data => {
      setComments(data);
    });
  }, []);

  return comments.map(comment => {
    
    return (
      <div key={comment.comment_id} className="comment">
        <CommentCard
          comment_id={comment.comment_id}
          author={comment.author}
          commentBody={comment.body}
          createdAt={comment.created_at}
          commentVotes={comment.votes}
        />
      </div>
    );
  });
};

export default CommentList;
