import React from "react";
import "./Caroussel.css";
import Typical from "react-typical";

function Caroussel() {
  return (
    <div className="containerCarou">
      <h1>Bonjour, je m'appelle Raphaël</h1>
      <p className="contentUnderTitle">
        Je suis{" "}
        <strong>
          <Typical
            steps={["Développeur", 1000, "Designer", 1000, "Etudiant", 1000]}
            loop={Infinity}
            wrapper="span"
          />
        </strong>
      </p>
    </div>
  );
}

export default Caroussel;
