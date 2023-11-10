import ArticleCard from "./ArticleCard";
import "./styles.css";

const ArticleList = ({ currentArticles }) => {
  return (
    <div className="grid">
      {currentArticles.map((article) => {
        return (
          <div key={article.article_id} className="cell">
            <ArticleCard
              title={article.title}
              articleBody={article.body}
              commentCount={article.comment_count}
              votes={article.votes}
              article_id={article.article_id}
              article_img_url={article.article_img_url}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ArticleList;
