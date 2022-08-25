import { useSearchParams } from "react-router-dom";

const SortBy = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const replaceSearchParam = (param, value) => {
    searchParams.set(param, value);
    setSearchParams(searchParams);
  };

  return (
    <div className="Sort-by__buttons">
      <label>Sort by:</label>
      <button onClick={() => replaceSearchParam("sort_by", "created_at")}>
        Date
      </button>
      <button onClick={() => replaceSearchParam("sort_by", "comment_count")}>
        Comment Count
      </button>
      <button onClick={() => replaceSearchParam("sort_by", "votes")}>
        Votes
      </button>

      <button onClick={() => replaceSearchParam("order", "desc")}>
        Descending
      </button>
      <button onClick={() => replaceSearchParam("order", "asc")}>
        Ascending
      </button>
    </div>
  );
};

export default SortBy;
