import React from "react";
import { Header, Caroussel, DownPart, Slider } from "../components/index";
import "./MainPage.css";

function MainPage() {
  return (
    <div className="main">
      <Header></Header>
      <div className="homePageContainer">
        <Caroussel></Caroussel>
        <DownPart></DownPart>
      </div>
      <div className="body">
        <div className="servicePart">
          <Slider></Slider>
        </div>
      </div>
      <Caroussel></Caroussel>
      <Caroussel></Caroussel>
      <Caroussel></Caroussel>
    </div>
  );
}

export default MainPage;
