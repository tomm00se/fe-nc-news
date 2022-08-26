import { useSearchParams } from "react-router-dom";

const SortBy = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const replaceSearchParam = (param, value) => {
    searchParams.set(param, value);
    setSearchParams(searchParams);
  };

  const handleSortChange = (event) => {
    replaceSearchParam("sort_by", event.target.value);
  };

  const handleOrderChange = (event) => {
    replaceSearchParam("order", event.target.value);
  };

  return (
    <div className="Sort-by__container">
      <label htmlFor="Sort-by" className="Sort-by__label">
        Sort by:
      </label>

      <select
        className="Sort-by__dropdown-select"
        id="Sort-by"
        onChange={handleSortChange}
      >
        <option value="created_at">Date</option>
        <option value="comment_count">Comment Count</option>
        <option value="votes">Votes</option>
      </select>

      <label htmlFor="Order-by" className="Sort-by__label">
        Order by:
      </label>

      <select
        className="Sort-by__dropdown-select"
        id="Order-by"
        onChange={handleOrderChange}
      >
        <option value="desc">Descending</option>
        <option value="asc">Ascending</option>
      </select>
    </div>
  );
};

export default SortBy;
