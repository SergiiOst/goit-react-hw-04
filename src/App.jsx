// import { useState } from "react";
import { useState } from "react";
import { SearchBar } from "./SearchBar/SearchBar";

function App() {
  const [query, setQuery] = useState("");

  const handleSetQuery = (query) => {
    setQuery(query);
    setImages([]);
    setPage(1);
  };
  return (
    <>
      <SearchBar setQuery={handleSetQuery} />
    </>
  );
}

export default App;
