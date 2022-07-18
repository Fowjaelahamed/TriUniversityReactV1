/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../styles.css";
import { Link } from "react-router-dom";

function Topbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light " id="top">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse topfontsize"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to="/safty-measures"
                className="nav-link text-normal text-uppercase text-white "
              >
                Saftey Measures
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/forum"
                className="nav-link text-normal text-uppercase text-white "
              >
                Forum
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/student"
                className="nav-link text-normal text-uppercase text-white "
              >
                Students
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/faculty"
                className="nav-link text-normal text-uppercase text-white "
              >
                Faculty
              </Link>
            </li>
            <li className="nav-item">
              <Link
               to="/almuni"
                className="nav-link text-normal text-uppercase text-white "
              >
                Alumni
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/administration"
                className="nav-link text-normal text-uppercase text-white "
              >
                Administration
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Topbar;
