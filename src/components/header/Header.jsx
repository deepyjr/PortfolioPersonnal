import React from "react";
import "./Header.css";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

export default function Header(props) {
  const [isScrolled, setIsScrolled] = React.useState("");
  const [over80, setOver80] = React.useState(false);

  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y < 200) {
      setIsScrolled("isScrolled");
      setOver80(true);
    } else {
      setIsScrolled("");
    }
    console.log("prevPos", prevPos.y);
    console.log("ACTUALPos", currPos.y);
  });

  return (
    <>
      <div className={"containerNavBar " + isScrolled}>
        <nav className="containerTitle">
          <a className="titleHeader" href="http://">
            Deepyjr
          </a>
        </nav>
        <nav>
          <ul className="linkContainer">
            <li className="linkElement">
              <a href="http://">Services</a>
            </li>
            <li className="linkElement">
              <a href="http://">Portfolio</a>
            </li>
            <li className="linkElement">
              <a href="http://">Prix</a>
            </li>
            <li className="linkElement">
              <a href="http://">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
