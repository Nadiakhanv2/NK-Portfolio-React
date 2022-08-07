import React from "react";
import {
  
  BsSearch,
} from "react-icons/bs";
// import logo from "./public/logo.png"

function Navbar() {
  return (
    <header className="header-primary">
      <nav className="navbar navbar-light navbar-expand-lg ">
        <div className="container-fluid flex">
          <a href="/" className="plx-navbar navbar-brand text-blog">
            <img src="" alt="" width={63} className="img-fluid" />
          </a>
          <div className="plx-navbar collapse navbar-collapse">
            <ul className="navbar-nav me-auto pt-0 pb-0">
              <li className="nav-item fs-2 ">
                <a
                  href="/"
                  className="nav-link nav-link-primary active-primary"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="/about" className="nav-link nav-link-primary">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="/Services" className="nav-link nav-link-primary ">
                  Services
                </a>
              </li>

              <li className="nav-item">
                <a href="/Portfolio" className="nav-link nav-link-primary ">
                  Portfolio
                </a>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  href="/"
                  className="nav-link nav-link-primary"
                  aria-controls="search"
                  aria-expanded="false"
                >
                  <i className="blog-clr" aria-hidden="true">
                    <BsSearch className="fa" />
                  </i>
                </a>
              </li>
              <li className="nav-item">
                <a href="/Contact" className="nav-link nav-link-primary ">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a href="/Services" className="nav-link nav-link-primary ">
                  Services
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
