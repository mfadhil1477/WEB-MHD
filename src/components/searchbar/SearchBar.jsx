import "./SearchBar.css"

export default function SearchBar({ onSearch }) {
  return (
    <input
      className="search"
      placeholder="Cari hadis atau kata kunci..."
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}
