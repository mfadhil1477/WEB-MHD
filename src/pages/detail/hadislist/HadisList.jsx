import { useEffect, useState } from "react";
import { fetchHadis } from "../../../services/HadisApi";
import HadisCard from "../../../components/cardhadis/CardHadis";
import SearchBar from "../../../components/searchbar/SearchBar";
import "./HadisList.css"

export default function App() {
  const [hadisDB, setHadisDB] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchHadis().then(setHadisDB);
  }, []);

  const filtered = hadisDB.filter(h =>
    h.lafaz?.toLowerCase().includes(query) ||
    h.terjemah?.toLowerCase().includes(query) ||
    h.summary?.toLowerCase().includes(query) 
  );

  const [index, setIndex] = useState(0)
  
  const prevHadis = () => {
    if (index > 0) {
      setIndex(index -1);
    }
  };

  const nextHadis = () => {
    if (index < filtered.length - 1 ) {
      setIndex(index + 1);
    }
    

    
  }
  return (
    <div className="container">
      <h1>Ma’anil Hadis Interaktif</h1>
      <p></p>

      <SearchBar onSearch={setQuery} />

      {/* {filtered.map((h, i) => (
        <HadisCard key={i} hadis={h} />
      ))} */}
      {filtered.length > 0 && <HadisCard hadis={filtered[index]} />}
        <div className="nav-buttons">
            <span>{index + 1} / {filtered.length}</span>
            
{/* 
            {filtered.length > 0 && <HadisCard hadis={filtered[index]} />} */}


  <button
    className="btn-prev"
    onClick={prevHadis}
    disabled={index === 0}
  >
    ⬅ Sebelumnya
  </button>
            <button className="btn-next" onClick={nextHadis} disabled={index === filtered.length - 1}>
            Selanjutnya ➡
            </button>
        </div>

</div>
  );
}
