// import { useEffect } from "react";
// import { useParams } from "react-router-dom";
// import ArticleCards from "./ArticleCards";
// import "./styles.css";
// import { fetchArticles } from "../utils";

// const Topic = ({ currentArticles, setCurrentArticles }) => {
//   const { topic } = useParams();

//   useEffect(() => {
//     fetchArticles(topic).then(data => {
//       setCurrentArticles(data);
//     });
//   }, [topic]);

//   return <ArticleCards currentItems={currentItems} />;
// };

// export default Topic;
