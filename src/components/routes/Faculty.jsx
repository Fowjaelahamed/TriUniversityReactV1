import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../Breadcrumb";
import SocialIcon from "../SocialIcon";
function Faculty() {
  return (
    <>
      <Breadcrumb name="Faculty" />
      <section class="container my-3">
        <div class="container row  g-2 mb-4 justify-content-md-center align-self-center text-uppercase w-75 bg-light">
          <div class="col">
            <ul>
              <li class="py-2">
                <Link to="deansheads" class="text-decoration-none text-dark">
                  Dean & Heads
                </Link>
              </li>
              <li class="py-2">
                <Link to="#" class="text-decoration-none text-dark">
                  Associate Deans & Heads
                </Link>
              </li>
            </ul>
          </div>
          <div class="col">
            <li class="py-2">
              <Link
                to="visitingprofessors"
                class="text-decoration-none text-dark"
              >
                Visiting Professors
              </Link>
            </li>
          </div>
          <div class="col">
            <li class="py-2">
              <Link to="#" class="text-decoration-none text-dark">
                Faculty Members
              </Link>
            </li>
          </div>
        </div>
        <SocialIcon />
      </section>
    </>
  );
}
export default Faculty;
