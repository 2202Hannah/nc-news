import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticlesByTopic } from "../utils";

import ErrorPage from "./ErrorPage";
import ArticleList from "./ArticleList";
import LoadingSpinner from "./LoadingSpinner";

import "./styles.css";

const Topic = ({
  currentArticles,
  setCurrentArticles,
  sort,
  setSort,
  order,
  setOrder
}) => {
  const { topic } = useParams();

  // Error handling useState()
  const [isErr, setIsErr] = useState(false);
  const [errResponse, setErrResponse] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchArticlesByTopic(topic, sort, order)
      .then(data => {
        setCurrentArticles(data);
        setIsLoading(false);
      })
      .catch(err => {
        setIsErr(true);
        setErrResponse(err.response);
        setIsLoading(false);
      });
  }, [topic, sort, order]);

  if (isLoading) return <LoadingSpinner />;
  else if (isErr) {
    return <ErrorPage errResponse={errResponse} />;
  }
  return (
    <ArticleList
      currentArticles={currentArticles}
      setSort={setSort}
      setOrder={setOrder}
    />
  );
};

export default Topic;
