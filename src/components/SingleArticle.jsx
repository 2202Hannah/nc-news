import { useEffect } from "react";
import { fetchArticlesById } from "../utils";
import { useParams } from "react-router";

const SingleArticle = () => {
  const { article_id } = useParams();
  console.log(article_id);
  useEffect(() => {
    fetchArticlesById(article_id).then(data => {
      console.log(data);
    });
  }, []);

  return (
    <div className="gridContainer">
      <h2>hi</h2>
    </div>
  );
};

export default SingleArticle;
