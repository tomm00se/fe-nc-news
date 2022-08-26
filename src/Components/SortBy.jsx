import { useSearchParams } from "react-router-dom";

const SortBy = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const replaceSearchParam = (param, value) => {
    searchParams.set(param, value);
    setSearchParams(searchParams);
  };

  return (
    <div className="Sort-by__buttons">
      <label className="Sort-by__label">Sort by:</label>
      <button
        className="Sort-by__buttons--date"
        onClick={() => replaceSearchParam("sort_by", "created_at")}
      >
        Date
      </button>
      <button
        className="Sort-by__buttons--comment-count"
        onClick={() => replaceSearchParam("sort_by", "comment_count")}
      >
        Comment Count
      </button>
      <button
        className="Sort-by__buttons--votes"
        onClick={() => replaceSearchParam("sort_by", "votes")}
      >
        Votes
      </button>

      <button
        className="Sort-by__buttons--descending"
        onClick={() => replaceSearchParam("order", "desc")}
      >
        Descending
      </button>
      <button
        className="Sort-by__buttons--ascending"
        onClick={() => replaceSearchParam("order", "asc")}
      >
        Ascending
      </button>
    </div>
  );
};

export default SortBy;
