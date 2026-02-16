import { useState } from "react";
import "./BookmarkBtn.css"

export default function BookmarkButton({ hadis }) {
  const [isBookmarked, setIsBookmarked] = useState(() => {
    const saved = JSON.parse(localStorage.getItem("bookmarks")) || [];
    return saved.some((item) => item.id === hadis.id);
  });

  const toggleBookmark = () => {
    const saved = JSON.parse(localStorage.getItem("bookmarks")) || [];

    let updated;

    if (isBookmarked) {
      updated = saved.filter((item) => item.id !== hadis.id);
    } else {
      updated = [...saved, hadis];
    }

    localStorage.setItem("bookmarks", JSON.stringify(updated));
    setIsBookmarked(!isBookmarked);
  };
  


  return (
    <button className="bookmark-btn" onClick={toggleBookmark}>
      {isBookmarked ? "★ Tersimpan" : "☆ Bookmark"}
    </button>
  );
}
