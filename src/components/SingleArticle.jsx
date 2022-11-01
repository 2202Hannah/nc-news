import { useEffect, useState } from "react";
import { fetchArticlesById } from "../utils";
import { useParams } from "react-router";
import CommentList from "./CommentList";
import Moment from "react-moment";
import "moment-timezone";

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
      <h4>
        Posted by: {article.author}</h4>
        <Moment format="DD/MM/YYYY">
                {article.createdAt}
            </Moment>
      {/* <p>Topic: {article.topic}</p>
      <p>
        Votes: {article.votes} Comments: {article.comment_count}
      </p> */}
      <p>{article.body}</p>
      </div>
      <h3> Comments </h3>
      <CommentList />
    </div>
  );
};

export default SingleArticle;
