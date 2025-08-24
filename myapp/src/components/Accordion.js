import React, { useState } from "react";
const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };
return (
    <div className="FAQ" >
        <h1 className="title" style={{
            textAlign:"center",
            background:"black",
            color:"white",
     }}>FAQ</h1>
    <div style={{ maxWidth: "90%", margin: "20px auto" }}>
      {items.map((item, idx) => (
        <div key={idx} style={{ marginBottom: 10, border: "1px solid #ccc", borderRadius: 5 }}>
          <button
            onClick={() => handleClick(idx)}
            style={{
              width: "100%",
              textAlign: "left",
              padding: "12px 16px",
              background: "#fafcfdff",
              border: "none",
              outline: "none",
              cursor: "pointer",
              fontWeight: "bold",
              borderRadius: "5px 5px 0 0"
            }}
          >
            {item.title}
          </button>
          {openIndex === idx && (
            <div style={{ padding: "12px 16px", background: "#fff" }}>
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
    </div>
  );
};

export default Accordion;