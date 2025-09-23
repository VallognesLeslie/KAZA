import React from "react";
import "../styles/banner.scss";

const Banner = ({ title, imageUrl }) => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${imageUrl})` }}>
      <h1>{title}</h1>
    </div>
  );
};

export default Banner;