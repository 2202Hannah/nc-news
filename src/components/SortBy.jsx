const SortBy = ({ setSort, setOrder }) => {
  const handleClick = (sortVariable, orderVariable) => {
    setSort(sortVariable);
    setOrder(orderVariable);
  };

  return (
    <div>
      <h4>sort by:</h4>
      <button
        type="button"
        onClick={() => {
          handleClick("created_at", "asc");
        }}
      >
        created at (newest first)
      </button>
      <button
        type="button"
        onClick={() => {
          handleClick("created_at", "desc");
        }}
      >
        created at (oldest first)
      </button>
      <button
        type="button"
        onClick={() => {
          handleClick("comment_count", "desc");
        }}
      >
        comments (high - low)
      </button>
      <button
        type="button"
        onClick={() => {
          handleClick("comment_count", "asc");
        }}
      >
        comments (low - high)
      </button>
      <button
        type="button"
        onClick={() => {
          handleClick("votes", "desc");
        }}
      >
        votes (high to low)
      </button>
      <button
        type="button"
        onClick={() => {
          handleClick("votes", "asc");
        }}
      >
        votes (low to high)
      </button>
    </div>
  );
};

export default SortBy;
