import { useEffect, useState } from "react";
import { fetchArticlesById } from "../utils";
import { useParams } from "react-router";
import Moment from "react-moment";
import "moment-timezone";

import CommentList from "./CommentList";
import ArticleVoter from "./ArticleVoter";
import CommentPoster from "./CommentPoster";
import ErrorPage from "./ErrorPage";

const SingleArticle = () => {
  const { article_id } = useParams();

  // Component useState()
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);

  // Error handling useState()
  const [isErr, setIsErr] = useState(false);
  const [errResponse, setErrResponse] = useState({});

  useEffect(() => {
    fetchArticlesById(article_id)
      .then(data => {
        setArticle(data);
      })
      .catch(err => {
        setIsErr(true);
        setErrResponse(err.response);
      });
  }, []);

  if (isErr) {
    return <ErrorPage errResponse={errResponse} />;
  }
  return (
    <div>
      <div className="singleArticle">
        <h2>{article.title}</h2>
        <ArticleVoter article_id={article_id} votes={article.votes} />
        <h4>Posted by: {article.author}</h4>
        <Moment format="DD/MM/YYYY">{article.createdAt}</Moment>
        <p>{article.body}</p>
      </div>
      <h4>Comments</h4>
      <CommentPoster setComments={setComments} article_id={article_id} />
      <CommentList
        comments={comments}
        setComments={setComments}
        article_id={article_id}
      />
    </div>
  );
};

export default SingleArticle;
