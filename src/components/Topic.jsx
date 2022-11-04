import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticlesByTopic } from "../utils";

import ErrorPage from "./ErrorPage";
import ArticleList from "./ArticleList";

import "./styles.css";

const Topic = ({ currentArticles, setCurrentArticles, sort, setSort, order, setOrder }) => {
  const { topic } = useParams();

  // Error handling useState()
  const [isErr, setIsErr] = useState(false);
  const [errResponse, setErrResponse] = useState({});

  useEffect(() => {
    fetchArticlesByTopic(topic, sort, order).then(data => {
      setCurrentArticles(data);
    }).catch(err => {
      setIsErr(true);
      setErrResponse(err.response);
    });
  }, [topic, sort, order]);

  if (isErr) {
    return <ErrorPage errResponse={errResponse} />;
  }
  return <ArticleList currentArticles={currentArticles} setSort={setSort} setOrder={setOrder}/>;
};

export default Topic;
