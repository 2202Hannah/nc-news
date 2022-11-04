const VoteButton = ({ upOrDown, onClick }) => {
  return upOrDown === "up" ? (
    <img
      className="voteButton"
      src="./images/up-vote.png"
      alt="up-down"
      onClick={onClick}
    />
  ) : (
    <img
      className="voteButton"
      src="./images/down-vote.png"
      alt="down-vote"
      onClick={onClick}
    />
  );
};

export default VoteButton;
