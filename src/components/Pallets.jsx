import React from 'react'
import {  BsFillCircleFill } from "react-icons/bs";


const Pallets = () => {
  return (
    <>
      <h3 className="text-center my-5 pallete-title">Choose Your Style</h3>
          <div className="pallete-content">
            <ul className="navbar-nav me-auto pt-0 pb-0 d-flex">
              
        <li className="nav-item">
          <a
            className="nav-link nav-link-primary"
            aria-controls="pallets"
            aria-expanded="false"
            href="/pallets"
          >
            <i className="fa text-primary my-0 py-0" aria-hidden="true">
              <BsFillCircleFill />
            </i>
          </a>
        </li>

        <li className="nav-item">
          <a
            className="nav-link nav-link-primary"
            aria-controls="pallets"
            aria-expanded="false"
            href="/pallets"
          >
            <i className="fa text-secondary my-0 py-0" aria-hidden="true">
              <BsFillCircleFill />
            </i>
          </a>
        </li>

        <li className="nav-item">
          <a
            className="nav-link nav-link-primary"
            aria-controls="pallets"
            aria-expanded="false"
            href="/pallets"
          >
            <i className="fa text-danger my-0 py-0" aria-hidden="true">
              <BsFillCircleFill />
            </i>
          </a>
        </li>

        <li className="nav-item">
          <a
            className="nav-link nav-link-primary"
            aria-controls="pallets"
            aria-expanded="false"
            href="/pallets"
          >
            <i className="fa text-info my-0 py-0" aria-hidden="true">
              <BsFillCircleFill />
            </i>
          </a>
        </li>

        <li className="nav-item">
          <a
            className="nav-link nav-link-primary"
            aria-controls="pallets"
            aria-expanded="false"
            href="/pallets"
          >
            <i className="fa text-warning my-0 py-0" aria-hidden="true">
              <BsFillCircleFill />
            </i>
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link nav-link-primary"
            aria-controls="pallets"
            aria-expanded="false"
            href="/pallets"
          >
            <i className="fa text-success my-0 py-0" aria-hidden="true">
              <BsFillCircleFill />
            </i>
          </a>
                  </li>
                  </ul>
      </div>
    </>
  );
}

export default Pallets
