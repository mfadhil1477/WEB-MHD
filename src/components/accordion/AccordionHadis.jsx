import { useState } from "react";
import "./Accordion.css"

export default function AccordionHadis({ analysis }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="accordion">
      {analysis.map((a, i) => (
        <div key={i}>
          <button 
            className="accordion-btn"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
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
  );
}
