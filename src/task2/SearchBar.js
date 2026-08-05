function SearchBar({ username, setUsername, onSearch, loading }) {
  return (
    <div className="t2-search-bar">
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            onSearch();
          }
        }}
      />

      <button
        onClick={onSearch}
        disabled={loading}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;