const SortBy = ({ setSort }) => {
  const handleClick = sortVariable => {
    setSort(sortVariable);
  };

  return (
    <div>
      <h4>sort by:</h4>
      <button
        type="button"
        onClick={() => {
          handleClick("created_at");
        }}
      >
        created at
      </button>
      <button
        type="button"
        onClick={() => {
          handleClick("comment_count");
        }}
      >
        comments
      </button>
      <button
        type="button"
        onClick={() => {
          handleClick("votes");
        }}
      >
        votes
      </button>
    </div>
  );
};

export default SortBy;
