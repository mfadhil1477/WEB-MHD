import { useState } from "react";
import "./Accordion.css";

export default function AccordionHadis({ analysis }) {

  const [mode, setMode] = useState("dirayah");
  const [openIndex, setOpenIndex] = useState(null);
  const [stepCompleted, setStepCompleted] = useState(-1);
  const [dirayahDone, setDirayahDone] = useState(false);

  const dirayahSteps = [
    "Analisis Lughawi",
    "Penjelasan Makna",
    "Interkoneksi Dengan Ayat Al-Qur'an Dan Hadis Lain",
    "Relevansi Kekinian"
  ];

  const riwayahSteps = [
    "Sanad",
    "Referensi",
    "Rawi a'la",
    "Status Hadis"
  ];

  const filteredAnalysis =
    mode === "dirayah"
      ? analysis.filter(a => dirayahSteps.includes(a.title))
      : analysis.filter(a => riwayahSteps.includes(a.title));

  const handleClick = (index) => {

    if (index > stepCompleted + 1) {
      alert("Silakan baca analisis sebelumnya terlebih dahulu.");
      return;
    }

    setOpenIndex(openIndex === index ? null : index);

    if (index > stepCompleted) {
      setStepCompleted(index);
    }

    /* jika step terakhir dirayah dibuka */
    if (mode === "dirayah" && index === dirayahSteps.length - 1) {
      setDirayahDone(true);
    }

  };

  const openDirayah = () => {
    setMode("dirayah");
    setOpenIndex(null);
    setStepCompleted(-1);
  };

  const openRiwayah = () => {

    if (!dirayahDone) {
      alert("Selesaikan Analisis Dirayah terlebih dahulu.");
      return;
    }

    setMode("riwayah");
    setOpenIndex(null);
    setStepCompleted(-1);
  };

  return (
    <div>

      {/* MODE BUTTON */}
      <div className="analysis-mode">

        <button
          className={`mode-btn ${mode === "dirayah" ? "active" : ""}`}
          onClick={openDirayah}
        >
          Analisis Dirayah
        </button>

        <button
          className={`mode-btn ${mode === "riwayah" ? "active" : ""}`}
          onClick={openRiwayah}
        >
          Analisis Riwayah
        </button>

      </div>

      {/* ACCORDION */}
      <div className="accordion">

        {filteredAnalysis.map((a, i) => (

          <div key={i}>

            <button
              className="accordion-btn"
              onClick={() => handleClick(i)}
            >
              {a.title}
            </button>

            {openIndex === i && (
              <div className="panel">
                <p>{a.content}</p>
              </div>
            )}

          </div>

        ))}

      </div>

    </div>
  );
}