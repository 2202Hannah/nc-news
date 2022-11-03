import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ArticleList from "./ArticleList";
import "./styles.css";
import { fetchArticlesByTopic } from "../utils";

const Topic = ({ currentArticles, setCurrentArticles }) => {
  const { topic } = useParams();

  useEffect(() => {
    fetchArticlesByTopic(topic).then(data => {
      setCurrentArticles(data);
    });
  }, [topic]);

  return <ArticleList currentArticles={currentArticles} />;
};

export default Topic;
