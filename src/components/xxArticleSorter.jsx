import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ArticleList from "./ArticleList";
import "./styles.css";
import { fetchArticles } from "../utils";


const ArticleSorter = ({currentArticles, setCurrentArticles}) => {
  const { sort_by } = useParams();
  console.log(sort_by);
  
  useEffect(() => {
    fetchArticles(sort_by).then(data => {
      setCurrentArticles(data);
    });
  }, [sort_by]);

  return <ArticleList currentArticles={currentArticles} />;
};

export default ArticleSorter;
