import { useEffect, useState } from "react";
import { fetchArticlesById } from "../utils";
import { useParams } from "react-router";
import Moment from "react-moment";
import "moment-timezone";
import CommentList from "./CommentList";

const SingleArticle = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    fetchArticlesById(article_id).then(data => {
      setArticle(data);
    });
  }, []);

  return (
    <div>
      <div className="singleArticle">
        <h2>{article.title}</h2>
        <h4>Posted by: {article.author}</h4>
        <Moment format="DD/MM/YYYY">{article.createdAt}</Moment>
        <p>{article.body}</p>
      </div>
      <h4>Comments</h4>
      <CommentList />
    </div>
  );
};

export default SingleArticle;
