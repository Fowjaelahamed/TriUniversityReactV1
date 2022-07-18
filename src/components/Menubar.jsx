/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../styles.css";
import logo from "../images/logo/logo.png";
import Modal from "./Modal";
import { Link } from "react-router-dom";
function Menubar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="" width="150px" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main_nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="main_nav">
          <ul className="navbar-nav">
            {/* <!-- admission --> */}
            <li className="nav-item dropdown has-megamenu">
              <Link
                to="#"
                className="nav-link text-dark dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Admission
              </Link>
              <div
                className="dropdown-menu megamenu container w-50"
                role="menu"
              >
                <div className="container">
                  <div className="row">
                    <div className="col-4">
                      <Link
                        to="/admission-information"
                        className="nav-link text-warning"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                      >
                        {" "}
                        Admission Information
                      </Link>
                      <Link to="/undergraduate" className="nav-link text-dark">
                        UnderGraduate Programs
                      </Link>
                      <Link to="/graduate" className="nav-link text-dark">
                        Graduate Programs
                      </Link>
                    </div>
                    <div className="col-4">
                      <Link to="#" className="nav-link text-warning">
                        {" "}
                        Guidlines
                      </Link>

                      <Link
                        to="/admission-eligibility"
                        className="nav-link text-dark"
                      >
                        Admission Eligibility
                      </Link>
                      <Link
                        to="/admission-process"
                        className="nav-link text-dark"
                      >
                        Admission process
                      </Link>
                    </div>
                    <div className="col-4">
                      <Link to="#" className="nav-link text-warning">
                        Fees and Fundings
                      </Link>
                      <Link
                        to="/tution-fees-local-student"
                        className="nav-link text-dark"
                      >
                        Tution Fees for Local students
                      </Link>
                      <Link
                        to="/tution-fees-int-student"
                        className="nav-link text-dark"
                      >
                        Tution Fees for international students
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- dropdown-mega-menu.// --> */}
            </li>
            {/* <!-- acamedics --> */}
            <li className="nav-item dropdown has-megamenu">
              <Link
                to="#"
                className="nav-link text-dark dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Acamedics
              </Link>
              <div
                className="dropdown-menu megamenu container w-50"
                role="menu"
              >
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <Link to="#" className="nav-link text-warning">
                        Academic
                      </Link>
                      <Link to="/academic" className="nav-link text-dark">
                        Academic Programs
                      </Link>
                      <Link
                        to="/academic-calender"
                        className="nav-link text-dark"
                      >
                        Academic Calendar
                      </Link>
                    </div>
                    <div className="col">
                      <Link to="#" className="nav-link text-warning">
                        Academic Bodies
                      </Link>
                      <Link to="#" className="nav-link text-dark">
                        Faculties
                      </Link>
                      <Link to="#" className="nav-link text-dark">
                        Departments
                      </Link>
                    </div>
                    <div className="col">
                      <Link to="#" className="nav-link text-warning">
                        Our Institutions
                      </Link>
                      <Link to="#" className="nav-link text-dark">
                        Student's Affairs
                      </Link>
                      <Link to="#" className="nav-link text-dark">
                        Career Development Centers
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- dropdown-mega-menu.// --> */}
            </li>
            {/* <!-- Research --> */}
            <li className="nav-item dropdown has-megamenu">
              <Link
                to="#"
                className="nav-link text-dark dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Research
              </Link>

              <div
                className="dropdown-menu megamenu container w-50"
                role="menu"
              >
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <Link to="#" className="nav-link text-warning">
                        Research
                      </Link>
                      <Link to="/research" className="nav-link text-dark">
                        Division of Research
                      </Link>
                      <Link to="#" className="nav-link text-dark">
                        Research Projects
                      </Link>
                    </div>
                    <div className="col">
                      <Link to="#" className="nav-link text-warning">
                        Journals
                      </Link>
                      <Link to="#" className="nav-link text-dark">
                        Science & Technology
                      </Link>
                      <Link to="#" className="nav-link text-dark">
                        Business & Entrepreneurship
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- dropdown-mega-menu.// --> */}
            </li>
            {/* <!-- International --> */}
            <li className="nav-item dropdown has-megamenu">
              <Link
                to="#"
                className="nav-link text-dark dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                International
              </Link>

              <div
                className="dropdown-menu megamenu container w-50"
                role="menu"
              >
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <Link to="#" className="nav-link text-warning">
                        International Admission
                      </Link>
                      <Link to="#" className="nav-link text-dark">
                        International contact
                      </Link>
                      <Link to="#" className="nav-link text-dark">
                        Tution Fees (int)
                      </Link>
                    </div>
                    <div className="col">
                      <Link to="#" className="nav-link text-warning">
                        Details
                      </Link>
                      <Link to="#" className="nav-link text-dark">
                        international Alumni
                      </Link>
                      <Link to="#" className="nav-link text-dark">
                        Membership
                      </Link>
                    </div>
                    <div className="col">
                      <Link to="#" className="nav-link text-warning">
                        collaboration
                      </Link>
                      <Link to="#" className="nav-link text-dark">
                        International Linkage
                      </Link>
                      <Link to="#" className="nav-link text-dark">
                        International Conferences
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- dropdown-mega-menu.// --> */}
            </li>
            {/* <!-- About --> */}
            <li className="nav-item dropdown has-megamenu">
              <Link
                to="#"
                className="nav-link text-dark dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                About
              </Link>
              <div
                className="dropdown-menu megamenu container w-50"
                role="menu"
              >
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <Link to="#" className="nav-link text-warning">
                        About University
                      </Link>
                      <Link to="#" className="nav-link text-dark">
                        Historical Outline
                      </Link>
                      <Link to="#" className="nav-link text-dark">
                        University at a Glance
                      </Link>
                    </div>
                    <div className="col">
                      <Link to="#" className="nav-link text-warning">
                        university Leadership
                      </Link>
                      <Link to="#" className="nav-link text-dark">
                        Chancellor
                      </Link>
                      <Link to="#" className="nav-link text-dark">
                        Vice Chancellor
                      </Link>
                    </div>
                    <div className="col">
                      <Link to="#" className="nav-link text-warning">
                        Governance Framework
                      </Link>
                      <Link to="#" className="nav-link text-dark">
                        Board of Trustees
                      </Link>
                      <Link to="#" className="nav-link text-dark">
                        Syndicate Members
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- dropdown-mega-menu.// --> */}
            </li>
          </ul>
          {/* <!-- appy online section --> */}
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button type="button" className="btn btnclr text-white">
                Apply Online
              </button>
            </li>
            <li className="nav-item dropdown has-megamenu">
              <Link to="#" className="nav-link" data-bs-toggle="dropdown">
                {" "}
                <i className="fa-solid fa-grip"></i>
              </Link>
              <ul className="dropdown-menu mn">
                <div className="container">
                  <div className="row row-cols-3 ms-auto">
                    <div className="col">
                      <Link to="#" className="nav-link text-dark">
                        <i className="fa-solid fa-book-open"></i>
                        <br />
                        Library
                      </Link>
                      <Link to="#" className="nav-link text-dark">
                        <i className="fa-solid fa-bell"></i>
                        <br />
                        Notice
                      </Link>
                      <Link to="#" className="nav-link text-dark">
                        <i className="fa-solid fa-language"></i>
                        <br />
                        DIL
                      </Link>
                    </div>
                    <div className="col">
                      <Link to="#" className="nav-link text-dark">
                        <i className="fa-solid fa-bell"></i>
                        <br />
                        Notice
                      </Link>
                      <Link to="#" className="nav-link text-dark">
                        <i className="fa-solid fa-language"></i>
                        <br />
                        DIL
                      </Link>
                      <Link to="#" className="nav-link text-dark">
                        <i className="fa-solid fa-hand-holding"></i>
                        <br />
                        IQAC
                      </Link>
                    </div>
                    <div className="col">
                      <Link to="#" className="nav-link text-dark">
                        <i className="fa-solid fa-bell"></i>
                        <br />
                        Notice
                      </Link>
                      <Link to="#" className="nav-link text-dark">
                        <i className="fa-solid fa-language"></i>
                        <br />
                        DIL
                      </Link>

                      <Link to="#" className="nav-link text-dark">
                        {" "}
                        <i className="fa-solid fa-book-open"></i>
                        <br />
                        Library
                      </Link>
                    </div>
                  </div>
                </div>
              </ul>
            </li>
          </ul>
        </div>
        {/* <!-- navbar-collapse.// -->
            <!-- modal for admission information --> */}
        <Modal />
      </div>
    </nav>
  );
}
export default Menubar;
