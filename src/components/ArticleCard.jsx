import "./styles.css";

const ArticleCard = ({ title, articleBody, commentCount, votes }) => {
  return (
    <div className="articleCard">
      <h3>{title}</h3>
      <p>
        VOTES: {votes} COMMENTS: {commentCount}
      </p>
      <p className="articlePreview">{articleBody}</p>
    </div>
  );
};

export default ArticleCard;
