import React from "react";
import {
  BsSearch,
} from "react-icons/bs";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <header className="header-primary">
      <nav className="navbar navbar-light navbar-expand-lg ">
        <div className="container-fluid flex">
          <Link to="/" className="plx-navbar navbar-brand text-blog ms-5">
            <img
              src={props.logo}
              alt="nadya-khan"
              width={63}
              className="img-fluid"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#header-menu"
            data-toggle="collapse"
            data-target="#header-menu"
            aria-controls="header-menu"
            aria-expanded="false"
            aria-label="Toggle Navigation"
          >
            <span className="navbar-toggler-icon small"></span>
          </button>
          <div className="plx-navbar collapse navbar-collapse">
            <ul className="navbar-nav me-auto pt-0 pb-0">
              <li className="nav-item fs-2 ">
                <Link
                  to="/"
                  className="nav-link nav-link-primary active-primary"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link nav-link-primary">
                  About
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link to="/services" className="nav-link nav-link-primary ">
                  Services
                </Link>
              </li> */}

              <li className="nav-item">
                <Link to="/portfolio" className="nav-link nav-link-primary ">
                  Portfolio
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link nav-link-primary"
                  aria-controls="search"
                  aria-expanded="false"
                >
                  <i className="blog-clr" aria-hidden="true">
                    <BsSearch className="fa" />
                  </i>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link nav-link-primary ">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link nav-link-primary ">
                  Services
                </Link>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link nav-link-primary"
                  aria-controls="pallets"
                  aria-expanded="false"
                  href="/#"
                >
                  <i
                    class="fa fa-circle text-primary my-0 py-0"
                    aria-hidden="true"
                  ></i>
                </a>
              </li>
            </ul>
            <div className="d-flex">
              <div
                className="bg-primary rounded-circle mx-2"
                style={{ height: "30px", width: "30px" }}
              ></div>

              <div
                className="bg-secondary rounded-circle mx-2"
                style={{ height: "30px", width: "30px" }}
              ></div>

              <div
                className="bg-info rounded-circle mx-2"
                style={{ height: "30px", width: "30px" }}
              ></div>

              <div
                className="bg-danger rounded-circle mx-2"
                style={{ height: "30px", width: "30px" }}
              ></div>

              <div
                className="bg-warning rounded-circle mx-2"
                style={{ height: "30px", width: "30px" }}
              ></div>

              <div
                className="bg-success rounded-circle mx-2"
                style={{ height: "30px", width: "30px" }}
              ></div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
