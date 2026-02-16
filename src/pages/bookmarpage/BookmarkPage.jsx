import { useState } from "react";
import { Link } from "react-router-dom";
import "./BookmarkPage.css"

function BookmarkPage() {

  const [bookmarks, setBookmarks] = useState(() => {
    return JSON.parse(localStorage.getItem("bookmarks")) || [];
  });

  const removeBookmark = (id) => {
    const updated = bookmarks.filter((item) => item.id !== id);
    localStorage.setItem("bookmarks", JSON.stringify(updated));
    setBookmarks(updated);
  };

  return (
    <div className="container">
      <h1>📌 Hadis yang Dibookmark</h1>

      {bookmarks.length === 0 ? (
        <p>Belum ada hadis yang dibookmark.</p>
      ) : (
        bookmarks.map((hadis) => (
          <div key={hadis.id} className="bookmark-card">
            <h3>{hadis.judul}</h3>
            <p>{hadis.lafaz?.slice(0, 120)}...</p>

            <div>
              <Link to={`/hadis/${hadis.id}`}>
                <button className="detail-btn">Lihat Detail</button>
              </Link>

              <button className="hapus-btn" onClick={() => removeBookmark(hadis.id)}>
                ❌ Hapus
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default BookmarkPage;