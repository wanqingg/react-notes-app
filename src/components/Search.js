import { FaSearch } from "react-icons/fa";

const Search = ({ setQuery, query }) => {
  return (
    <div className="input-group my-3">
      <input
        className="form-control border-end-0 border rounded-pill bg-grey"
        type="search"
        placeholder="Type to search..."
        value={query}
        onInput={(e) => setQuery(e.target.value)}
      />
      <span className="input-group-append">
        <button
          className="btn btn-outline-secondary bg-grey border rounded-pill ms-n5 d-grid place-items-center h-100"
          type="button"
        >
          <FaSearch />
        </button>
      </span>
    </div>
  );
};

export default Search;
