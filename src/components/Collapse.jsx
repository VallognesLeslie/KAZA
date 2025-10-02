import React, { useState, useRef, useEffect } from "react";
import "../styles/collapse.scss";

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState("0px");
  const contentRef = useRef(null);

  // Calcule la hauteur réelle du contenu
  useEffect(() => {
    if (isOpen) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [isOpen]);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <button
        className={`collapse-header ${isOpen ? "open" : ""}`}
        onClick={toggleCollapse}
        type="button"
        aria-expanded={isOpen}
      >
        <h3>{title}</h3>
        <span className={`arrow-icon ${isOpen ? "open" : ""}`}>
          <svg
            width="24"
            height="14"
            viewBox="0 0 24 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M2 2L12 12L22 2"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>
      
      <div
        ref={contentRef}
        className="collapse-content"
        style={{ maxHeight: height }}
      >
        <div className="collapse-content-inner">
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
    </div>
  );
};

export default Collapse;