import React from "react";
// import logo from "./public/logo.png"

function Navbar() {
  return (
    <div>
      <nav className="navbar bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            ome
            {/* <img
              src={logo}
              alt=""
              width="60"
              height="24"
            /> */}
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
