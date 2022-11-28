import "./styles.css";

const VoteButton = ({ upOrDown, onClick }) => {
  return upOrDown === "up" ? (
    <img
      className="voteButton"
      id="button1"
      src={require("./images/up-vote.png")}
      alt="up-down"
      onClick={onClick}
    />
  ) : (
    <img
      className="voteButton"
      id="button2"
      src={require("./images/down-vote.png")}
      alt="down-vote"
      onClick={onClick}
    />
  );
};

export default VoteButton;
