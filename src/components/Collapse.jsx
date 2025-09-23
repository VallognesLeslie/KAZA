import React, { useState } from "react";
import "../styles/collapse.scss";

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div
        className={`collapse-header ${isOpen ? "open" : ""}`}
        onClick={toggleCollapse}
        style={{
          width: "1023px",
          height: "54px",
          paddingTop: "10px",
          paddingRight: "20px",
          paddingBottom: "10px",
          paddingLeft: "15px",
        }}
      >
        <h3>{title}</h3>
        <span className="arrow-icon">
          <svg
            width="24"
            height="14"
            viewBox="0 0 24 14"
            fill="none"
            xmlns="kasa/src/assets/arrow.png"
            style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
          >
            <path
              d="M2 2L12 12L22 2"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </div>
      <div className={`collapse-content ${isOpen ? "open" : ""}`}>
        {Array.isArray(content) ? (
          <ul>
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{content}</p>
        )}
      </div>
    </div>
  );
};

export default Collapse;