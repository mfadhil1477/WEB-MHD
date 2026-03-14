
import CategoryCard from "./categorycard/CategoryCard";
import "./Home.css";

export default function Home() {
  const categories = [
    { title: "BERSUCI", subtitle: "Thaharah", icon: "💧🧼", path: "/hadis/bersuci" },
    { title: "ZAKAT", subtitle: "Zakah", icon: "🤲💰", path: "/hadis/zakat" },
    { title: "PUASA", subtitle: "Shaum", icon: "🌙🛐", path: "/hadis/puasa" },
    { title: "MUAMALAH", subtitle: "Muamalah", icon: "🤝📜", path: "/hadis/muamalah" },
    { title: "HAJI", subtitle: "Hajj", icon: "🕋👳🏻‍♂️", path: "/hadis/haji" },
    { title: "AKHLAK", subtitle: "Akhlaq", icon: "🌸❤️", path: "/hadis/akhlak" },
  ];

  return (
    <div className="home-container">

      <div className="bg-animated">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span> 
      </div>
      {/* HEADER */}
      <div className="home-header">
        <div className="logo-arab">الحديث</div>
        <h1>MA’ANIL HADIS</h1>
        {/* <SearchBar placeholder="Cari Topik..." /> */}
      </div>
      {/* GRID MENU */}
      <div className="category-grid">
        {categories.map((cat, i) => (
          <CategoryCard key={i} data={cat} />
        ))}
      </div>
    </div>
  );
}
