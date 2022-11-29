import ArticleList from "./ArticleList";
import { useEffect } from "react";
import { fetchArticles } from "../utils";

import "./styles.css";

const Articles = ({
  currentArticles,
  setCurrentArticles,
  sort,
  setSort,
  order,
  setOrder
}) => {
  useEffect(() => {
    fetchArticles(sort, order).then(articleData => {
      setCurrentArticles(articleData);
    });
  }, [sort, order, setCurrentArticles]);
  

  return (
    <div className="gridContainer">
      <ArticleList
        currentArticles={currentArticles}
        setSort={setSort}
        setOrder={setOrder}
      />
    </div>
  );
};

export default Articles;
