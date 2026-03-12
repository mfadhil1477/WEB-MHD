import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchHadis } from "../../../services/HadisApi";
import HadisCard from "../../../components/cardhadis/CardHadis";
import SearchBar from "../../../components/searchbar/SearchBar";
import "./HadisList.css";

export default function HadisList() {

  const { kategori } = useParams();

  const [hadisDB, setHadisDB] = useState([]);
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetchHadis().then(setHadisDB);
  }, []);

  const filtered = hadisDB.filter(h =>
    h.kategori === kategori &&
    (
      h.lafaz?.toLowerCase().includes(query.toLowerCase()) ||
      h.terjemah?.toLowerCase().includes(query.toLowerCase()) ||
      h.summary?.toLowerCase().includes(query.toLowerCase())
    )
  );

  const prevHadis = () => {
    if (index > 0) setIndex(index - 1);
  };

  const nextHadis = () => {
    if (index < filtered.length - 1) setIndex(index + 1);
  };

  return (
    <div className="container">

      <h1>Hadis Tentang {kategori}</h1>

      <SearchBar onSearch={setQuery} />

      {filtered.length > 0 && (
        <HadisCard hadis={filtered[index]} />
      )}

      <div className="nav-buttons">

        <span>{index + 1} / {filtered.length}</span>

        <button
          className="btn-prev"
          onClick={prevHadis}
          disabled={index === 0}
        >
          ⬅ Sebelumnya
        </button>

        <button
          className="btn-next"
          onClick={nextHadis}
          disabled={index === filtered.length - 1}
        >
          Selanjutnya ➡
        </button>

      </div>
    </div>
  );
}