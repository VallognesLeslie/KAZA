import React from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import logements from "../Data/logements.json";
import "../styles/home.scss";
import bannerImage from "../assets/Imagesource.png";

const Home = () => {
  return (
    <div className="home">
      <Banner title="Chez vous, partout et ailleurs" imageUrl={bannerImage} />
      <div className="cards-container">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </div>
    </div>
  );
};
export default Home;
