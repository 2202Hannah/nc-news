import { useState } from "react";
import { patchArticleVotes } from "../utils";

const ArticleVoter = ({ votes, article_id }) => {
  const [voteIncrement, setVotes] = useState(0);
  const [err, setErr] = useState(null);

  const handleVoteIncrease = () => {
    setVotes(currentVotes => currentVotes + 1);
    setErr(null);
    patchArticleVotes(article_id, 1)
      .then(data => {})
      .catch(err => {
        setVotes(currentVotes => currentVotes - 1);
        setErr("Something went wrong, please try again.");
      });
  };

  const handleVoteDecrease = () => {
    setVotes(currentVotes => currentVotes - 1);
    setErr(null);
    patchArticleVotes(article_id, -1)
      .then(data => {})
      .catch(err => {
        setVotes(currentVotes => currentVotes + 1);
        setErr("Something went wrong, please try again.");
      });
  };

  if (err) return <p>{err}</p>;
  return (
    <>
      <h4 aria-label="votes">VOTES:{votes + voteIncrement}</h4>
      <button onClick={handleVoteIncrease}>Up Vote</button>
      <button onClick={handleVoteDecrease}>Down Vote</button>
    </>
  );
};

export default ArticleVoter;
