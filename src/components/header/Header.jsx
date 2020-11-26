import React, { useEffect } from "react";
import "./Header.css";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

export default function Header(props) {
  const [scrolled, setScrolled] = React.useState(false);
  let navbarClasses = ["containerNavBar"];

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  if (scrolled) {
    navbarClasses.push("isScrolled");
  }

  return (
    <>
      <div className={navbarClasses.join(" ")}>
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
