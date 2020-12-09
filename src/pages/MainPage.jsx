import React from "react";
import { Header, Caroussel, DownPart, SliderComponent } from "../components/index";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
import "./MainPage.css";
import Sidebar from "../components/burgerItems/Sidebar";
function MainPage() {
  return (
    <div className="main" id="main">
      <BrowserView>
        <Header />
      </BrowserView>
      <MobileView>
        <Sidebar
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
        />
      </MobileView>
      <div className="homePageContainer">
        <Caroussel></Caroussel>
        <DownPart></DownPart>
      </div>
      <div className="body">
        <div className="servicePart">
          <SliderComponent></SliderComponent>
        </div>
      </div>
      <Caroussel></Caroussel>
      <Caroussel></Caroussel>
      <Caroussel></Caroussel>
    </div>
  );
}

export default MainPage;
