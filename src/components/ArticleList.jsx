import ArticleCard from "./ArticleCard";
import "./styles.css";

const ArticleList = ({ currentArticles }) => {
  return currentArticles.map(article => {
    return (
      <div key={article.article_id} className="gridItem">
        <ArticleCard
          title={article.title}
          articleBody={article.body}
          commentCount={article.comment_count}
          votes={article.votes}
        />
      </div>
    );
  });
};

export default ArticleList;