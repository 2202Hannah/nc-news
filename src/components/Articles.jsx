import ArticleList from "./ArticleList";
import { useEffect } from "react";
import { fetchArticles } from "../utils";

import "./styles.css";

const Articles = ({ currentArticles, setCurrentArticles, sort, order }) => {
  useEffect(() => {
    fetchArticles(sort, order).then((articleData) => {
      return setCurrentArticles(articleData);
    });
  }, [sort, order, setCurrentArticles]);

  return <ArticleList currentArticles={currentArticles} />;
};

export default Articles;
