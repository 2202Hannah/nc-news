import ArticleList from "./ArticleList";
import { useEffect } from "react";
import { fetchArticles } from "../utils";

import "./styles.css";

const Articles = ({ currentArticles, setCurrentArticles, sort, setSort }) => {
  useEffect(() => {
    fetchArticles(sort).then(articleData => {
      setCurrentArticles(articleData);
    });
  }, [sort]);

  return (
    <div className="gridContainer">
      <ArticleList currentArticles={currentArticles} setSort={setSort} />
    </div>
  );
};

export default Articles;
