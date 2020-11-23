import React from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import './Header.css'

export default function Header() {

  return (
    <>
        <div className="containerNavBar">
            <nav className="containerTitle">
                <a className="titleHeader" href="http://">Deepyjr</a>
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
