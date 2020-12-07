import React, { useEffect } from "react";
import "./Header.scss";
import MenuIcon from "@material-ui/icons/Menu";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
import { slide as Menu } from "react-burger-menu";
import Sidebar from "../burgerItems/Sidebar"
export default function Header(props) {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  let navbarClasses = ["containerNavBar"];
  let burgerClasses = ["burgerItem"];

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

  const handleBugerMenu = () => {
    setOpen(true);
  };

  useEffect(() => {
    if (open) {
      console.log("gg");
      setOpen(false);
      navbarClasses.push("isOpen");
    }
  }, [open]);
  return (
    <>
      <header>
        <div className={navbarClasses.join(" ")}>
          <nav className="containerTitle">
            <a className="titleHeader" href="http://">
              Deepyjr
            </a>
          </nav>
          <nav>
            <BrowserView>
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
            </BrowserView>
          </nav>
        </div>
      </header>
    </>
  );
}
