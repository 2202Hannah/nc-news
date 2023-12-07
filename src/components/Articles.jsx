import ArticleList from "./ArticleList";
import LoadingSpinner from "./LoadingSpinner";
import ErrorPage from "./ErrorPage";
import SortBy from "./SortBy";
import { useEffect, useState } from "react";
import { fetchArticles } from "../utils";

import "./styles.css";

const Articles = ({
  currentArticles,
  setCurrentArticles,
  sort,
  order,
  setSort,
  setOrder,
}) => {
  const [isErr, setIsErr] = useState(false);
  const [errResponse, setErrResponse] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchArticles(sort, order, currentPage)
      .then((articleData) => {
        setCurrentArticles(articleData);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsErr(true);
        setErrResponse(err.response);
        setIsLoading(false);
      });
  }, [sort, order, setCurrentArticles, currentPage]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  if (isLoading) return <LoadingSpinner />;
  else if (isErr) return <ErrorPage errResponse={errResponse} />;

  return (
    <>
      <SortBy setSort={setSort} setOrder={setOrder} />
      <ArticleList currentArticles={currentArticles} />
      <button onClick={handlePrevPage} disabled={currentPage === 1}>
        Previous Page
      </button>
      <button onClick={handleNextPage}>
        Next Page
      </button>
    </>
  );
};

export default Articles;
