import "./styles.css";
import { Link } from "react-router-dom";

const ArticleCard = ({
  article_id,
  title,
  articleBody,
  commentCount,
  votes,
  article_img_url,
}) => {
  return (
    <div className="articleCard">
      <Link to={`/articles/${article_id}`}>
        <img src={article_img_url} alt={title} height="300" width="400"/>
        <h3>{title}</h3>
        <p>
          VOTES: {votes} COMMENTS: {commentCount}
        </p>
        <p className="articlePreview">{articleBody}</p>
      </Link>
    </div>
  );
};

export default ArticleCard;
