import ArticleList from "./ArticleList";
import { useEffect } from "react";
import { fetchArticles } from "../utils";

import "./styles.css";

const Articles = ({ currentArticles, setCurrentArticles }) => {
  useEffect(() => {
    fetchArticles().then(articleData => {
      setCurrentArticles(articleData);
    });
  }, []);

  return (
    <div className="gridContainer">
      <ArticleList currentArticles={currentArticles} />
    </div>
  );
};

export default Articles;
