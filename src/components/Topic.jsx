import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ArticleList from "./ArticleList";
import "./styles.css";
import { fetchArticlesByTopic } from "../utils";

const Topic = ({ currentArticles, setCurrentArticles, sort, setSort, order, setOrder }) => {
  const { topic } = useParams();

  useEffect(() => {
    fetchArticlesByTopic(topic, sort, order).then(data => {
      setCurrentArticles(data);
    });
  }, [topic, sort, order]);

  return <ArticleList currentArticles={currentArticles} setSort={setSort} setOrder={setOrder}/>;
};

export default Topic;
