
import CategoryCard from "./categorycard/CategoryCard";
import "./Home.css";

export default function Home() {
  const categories = [
    { title: "EKOLOGI",
    subtitle: "Hadis Lingkungan",
    icon: "🌿",
    path: "/intro/ekologi" },
{
  title: "GENDER",
  subtitle: "Relasi Gender",
  icon: "⚧️",
  path: "/intro/gender"
},
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
        <p>Ma’anil Hadis Interaktif adalah media pembelajaran Hadis berbasis web untuk membantu mahasiswa memahami Hadis secara mendalam dan kontekstual di era digital.</p>
        {/* <SearchBar placeholder="Cari Topik..." /> */}
      </div>
      {/* GRID MENU */}
      <div className="category-grid">
        {categories.map((cat, i) => (
          <CategoryCard key={i} data={cat} />
        ))}
      </div>
      <section className="profile-app">
      <div className="profile-container">
        <p>
          aplikasi ini mengintegrasikan pendekatan Hadis tematik dengan rujukan kitab syarah Hadis serta dirancang dengan teknologi React.js interaktif dan modern.
        </p>

        <div className="vision-mission">

          <div className="vision-card">
            <h3>Visi</h3>
            <span>
              <ul>
                <li>Menyederhanakan pemahaman hadis untuk semua kalangan</li>
                <li>Menggabungkan teknologi dengan ilmu syar’i</li>
              </ul>
            </span>
          </div>

          <div className="mission-card">
            <h3>Misi</h3>
            <ul>
              <li>Menyediakan hadis tematik untuk berbagai kebutuhan</li>
              <li>Membantu pelajar memahami makna hadis dengan jelas</li>
              <li>Mengembangkan pembelajaran digital Islami</li>
            </ul>
          </div>

        </div>
      </div>
      </section>
    </div>
  );
}
