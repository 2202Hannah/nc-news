import { useState } from "react";
import { patchArticleVotes } from "../utils";
import VoteButton from "./VoteButton";

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
      <VoteButton upOrDown="up" onClick={handleVoteIncrease} />
      <VoteButton upOrDown="down" onClick={handleVoteDecrease} />
    </>
  );
};

export default ArticleVoter;
