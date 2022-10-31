import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchComments } from "../utils";
import CommentCard from "./CommentCard";

const CommentList = () => {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments(article_id).then(data => {
      setComments(data);
    });
  }, []);

  return comments.map(comment => {
    return (
      <div key={comment.comment_id} className="comment">
        <CommentCard
          author={comment.author}
          commentBody={comment.body}
          createdAt={comment.createdAt}
          commentVotes={comment.votes}
        />
      </div>
    );
  });
};

export default CommentList;
