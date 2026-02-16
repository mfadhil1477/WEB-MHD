import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (

    <footer className="footer">
      <div className="footer-container">

        
        {/* Brand */}
        <div className="footer-brand">
          <h3>📖 Ma'anil Hadis</h3>
          <p>Platform pembelajaran dan pencarian hadis berbasis React
            untuk memudahkan memahami makna hadis.</p>
        </div>

        {/* Navigation */}
        <div className="footer-links">
          <h3>Menu</h3>
          <Link to="/">Home</Link>
          {/* <Link to="/hadis">Daftar Hadis</Link> */}
          <Link to="/about">Tentang Kami</Link>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h4>Kontak</h4>
          <p>📧 KangFadhil069@gmail.com</p>
          <p>📍 Jombang</p>
          <p>📱 081239352594</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Ma’anil Hadis. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;