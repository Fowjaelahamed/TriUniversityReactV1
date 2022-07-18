/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useLocation } from "react-router-dom";
import "../../src/login.css";
function Footer() {
  const customStyle = {
    position: " relative",
    left: "10%",
  };
  let location = useLocation();
  if (location.pathname === "/student/student-login") {
    return (
      <div id="login-footer">
        <hr id="loginhr"/>
        <p className="text-white text-center text-muted">
          {" "}
          © 2022 Tri University. All Rights Reserved. Developed and Maintained
          by:{" "}
          <a
            href="https://www.facebook.com/faimran.imran/"
            className="text-decoration-none"
          >
            Fowjael
          </a>
        </p>
      </div>
    );
  }
  return (
    <footer className="container-fluid py-5 bg-dark text-light">
      <div className="container py-4  d-md-flex justify-content-md-around">
        <div>
          <h5>Contact</h5>
          <ul className="list-unstyled text-small">
            <li>
              <a
                className="link-secondary"
                href="https://www.facebook.com/cyclehousbd/"
              >
                <i className="fa-brands fa-facebook"></i> TUofficial
              </a>
            </li>
            <li>
              <a
                className="link-secondary"
                href="https://www.instagram.com/cyclehousbd/"
              >
                <i className="fa-brands fa-instagram"></i> TUofficial
              </a>
            </li>
            <li>
              <a
                className="link-secondary"
                href="https://www.youtube.com/c/ThatsRahman"
              >
                <i className="fa-brands fa-youtube"></i> TUYT
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5>Resources</h5>
          <ul className="list-unstyled text-small">
            <li>
              <a className="link-secondary" href="#">
                Gallery
              </a>
            </li>
            <li>
              <a className="link-secondary" href="#">
                join us
              </a>
            </li>
            <li>
              <a className="link-secondary" href="#">
                Marathon
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5>About</h5>
          <ul className="list-unstyled text-small">
            <li>
              <a className="link-secondary" href="#">
                Team
              </a>
            </li>
            <li>
              <a className="link-secondary" href="#">
                Locations
              </a>
            </li>
            <li>
              <a className="link-secondary" href="#">
                Terms & Privacy
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5>Subscribe us</h5>
          <ul className="list-unstyled text-small">
            <div className="d-grid g-2">
              <li className="py-2">
                <input
                  type="email"
                  className="form-control "
                  placeholder="Enter Email Address"
                  id="email"
                />
              </li>
              <li>
                <button className="w-100 rounded btn btn-primary">
                  Subscribe
                </button>
              </li>
            </div>
          </ul>
        </div>
      </div>
      <hr className="w-75" style={customStyle} />
      <div>
        <small className="d-block text-light text-center">
          Copyright © 2022 demo by fowjael. All Rights Reserved.
        </small>
      </div>
    </footer>
  );
}
export default Footer;
