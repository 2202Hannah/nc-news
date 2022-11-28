const SortBy = ({ setSort, setOrder }) => {
  const handleClick = event => {
    setSort(JSON.parse(event.target.value).sortVariable);
    setOrder(JSON.parse(event.target.value).orderVariable);
  };

  return (
    <form>
      <label>sort by:</label>
      <select className="sortBy" onChange={event => handleClick(event)}>
        <option value='{ "sortVariable": "created_at", "orderVariable": "asc" }'>
          Created at (newest first)
        </option>
        <option value='{ "sortVariable": "created_at", "orderVariable": "desc" }'>
          Created at (oldest first)
        </option>
        <option value='{"sortVariable":"comment_count", "orderVariable": "desc"}'>
          Comments (high - low)
        </option>
        <option value='{"sortVariable":"comment_count", "orderVariable": "asc"}'>
          Comments (low - high)
        </option>
        <option value='{"sortVariable":"votes", "orderVariable": "desc"}'>
          Votes (high - low)
        </option>
        <option value='{"sortVariable":"votes", "orderVariable": "asc"}'>
          Votes (low - high)
        </option>
      </select>
    </form>
  );
};

export default SortBy;
