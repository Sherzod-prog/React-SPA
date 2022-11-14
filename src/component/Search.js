import { useState } from "react";

function Search({ cb = Function.prototype }) {
  const [value, steValue] = useState("");
  const handleKey = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    cb(value);
  };

  return (
    <div className="row">
      <div className="input-field col s12">
        <input
          type="search"
          id="search-field"
          placeholder="Search..."
          onKeyDown={handleKey}
          onChange={(e) => steValue(e.target.value)}
          value={value}
        />
        <button
          className="btn"
          style={{ position: "absolute", top: 0, right: 0 }}
          onClick={handleSubmit}
        >
          search
        </button>
      </div>
    </div>
  );
}
export default Search;
