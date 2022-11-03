import ArticleCard from "./ArticleCard";
import SortBy from "./SortBy";
import "./styles.css";

const ArticleList = ({ currentArticles, setSort, setOrder }) => {
  return (
    <div>
      <SortBy setSort={setSort} setOrder={setOrder} />
      {currentArticles.map(article => {
        return (
          <div key={article.article_id} className="gridItem">
            <ArticleCard
              title={article.title}
              articleBody={article.body}
              commentCount={article.comment_count}
              votes={article.votes}
              article_id={article.article_id}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ArticleList;
