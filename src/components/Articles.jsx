import ArticleList from "./ArticleList";
import LoadingSpinner from "./LoadingSpinner";
import ErrorPage from "./ErrorPage";
import SortBy from "./SortBy";
import { useEffect, useState } from "react";
import { fetchArticles } from "../utils";

import "./styles.css";

const Articles = ({ currentArticles, setCurrentArticles, sort, order, setSort, setOrder }) => {
  const [isErr, setIsErr] = useState(false);
  const [errResponse, setErrResponse] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchArticles(sort, order)
      .then((articleData) => {
        setCurrentArticles(articleData);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsErr(true);
        setErrResponse(err.response);
        setIsLoading(false);
      });
  }, [sort, order, setCurrentArticles]);

  if (isLoading) return <LoadingSpinner />;
  else if (isErr) return <ErrorPage errResponse={errResponse} />;

  return (
    <>
      <SortBy setSort={setSort} setOrder={setOrder} />
      <ArticleList currentArticles={currentArticles} />
    </>
  );
};

export default Articles;
