import { useState } from "react";
import Accordion from "../accordion/AccordionHadis"; // aktifkan kalau sudah ada
import "./CardHadis.css"
import BookmarkButton from "../bookmarkbutton/BookmarkBtn";

export default function CardHadis({ hadis }) {
  const [showTranslate, setShowTranslate] = useState(false);

  const playAudio = (text) => {
    speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "ar-SA";
    utter.rate = 0.9;
    utter.pitch = 1;
    speechSynthesis.speak(utter);
  };

  return (
    <div className="card">

      <div className="hadis-title">📖{hadis.title}</div>

      {/* Arabic Text */}
      <div className="arabic">{hadis.lafaz}</div>

      {/* Learning Mode Button */}
      <button  
        className="btn-learn"
        onClick={() => setShowTranslate(!showTranslate)}
      >
        {showTranslate ? "Sembunyikan Terjemah" : "Tampilkan Terjemah"}
      </button>

      {/* Terjemah (hidden by default) */}
      {showTranslate && (
        <p className="terjemah">{hadis.terjemah}</p>
      )}

      <div className="summary">{hadis.summary}</div>

      {/* tomnbol Audio */}
      <button className="btn-audio" onClick={() => playAudio(hadis.lafaz)}>
        🔊 Dengarkan Lafaz
      </button>

    <div className={`accordion-wrapper ${showTranslate ? "show" : ""}`}>
      <Accordion analysis={hadis.analysis} />


      <BookmarkButton hadis={hadis} />
      
    </div>
    </div>
  );
}
