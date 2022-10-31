import { useEffect, useState } from "react";
import { fetchArticlesById } from "../utils";
import { useParams } from "react-router";
import CommentList from "./CommentList";

const SingleArticle = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    fetchArticlesById(article_id).then(data => {
      setArticle(data);
    });
  }, []);

  console.log(article);

  return (
    <div>
      <h2>{article.title}</h2>
      <h4>
        Posted by: {article.author} Posted on: {article.created_at}
      </h4>
      <p>Topic: {article.topic}</p>
      <p>
        Votes: {article.votes} Comments: {article.comment_count}
      </p>
      <p>{article.body}</p>
      <CommentList />
    </div>
  );
};

export default SingleArticle;
