import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import HadisList from "./pages/detail/hadislist/HadisList";
import Footer from "./components/footer/FooterHadis";
import About from "./pages/about/About";
import Navbar from "./components/navbar/FormNavbar";
import BookmarkPage from "./pages/bookmarpage/BookmarkPage";
import Intro from "./pages/intro/Intro";
import "./app.css";

export default function App() {

  return (
    <BrowserRouter>

      <div className="app-wrapper">

        <Navbar />

        <Routes>

          <Route path="/" element={<Home />} />

          {/* introduction */}
          <Route path="/intro/:kategori" element={<Intro />} />

          {/* daftar hadis */}
          <Route path="/hadis/:kategori" element={<HadisList />} />

          <Route path="/about" element={<About />} />
          <Route path="/bookmark" element={<BookmarkPage />} />

        </Routes>

        <Footer />

      </div>

    </BrowserRouter>
  );
}