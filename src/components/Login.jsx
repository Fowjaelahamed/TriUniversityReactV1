import React from "react";
import "../../src/login.css";
import logo from "../images/logo/logo.jpg"
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="global-container">
      <div className="card login-form">
        <div className="card-body">
          <Link to="/"><img src={logo} alt="" /></Link>
          <div className="card-text">
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email</label>
                <input
                  type="email"
                  name="email"
                  id="exampleInputEmail1"
                  className="form-control form-control-sm"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputpassword1">Password</label>

                <input
                  type="password"
                  name="password"
                  id="exampleInputpassword1"
                  className="form-control form-control-sm"
                />
              </div>
              <button type="submit" className="btn btn-primary btn-login w-100 mb-3">
                Sign in
              </button>
              <a href="#" className="text-decoration-none">
                Forgot password?
              </a>
              <div className="mb-3  d-flex flex-column justify-content-center align-items-center">
                <p>Sign in with institutional email:</p>
                <div
                  className="g-signin2"
                  data-onsuccess="onSignIn"
                  data-theme="dark"
                ></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
