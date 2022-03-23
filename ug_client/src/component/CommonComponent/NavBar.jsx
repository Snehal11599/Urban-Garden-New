import React from "react";
import { NavLink } from "react-router-dom";
import Login from "../Home/Login";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container-fluid">
        <img
          src="assets/HomeImages/gacoicon.png"
          alt="logo"
          style={{ paddingLeft: "10px" }}
        />
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav p-2">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                to="/pages"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Pages
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/gallery">
                    Gallery
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/testimonials">
                    Testimonials
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/faq">
                    FAQ
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/news">
                    News
                  </NavLink>
                </li>
                <li className="nav-items">
                  <NavLink className="nav-link" to="/singlenews">
                    Single News
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/service">
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contactus">
                Contact Us
              </NavLink>
            </li>

            <li >
              
                {/* <button className="btn btn-success text-white">
                  <NavLink className="nav-link" to="/Login">
                  LOGIN
                  </NavLink>
                </button> */}
               <Login/>
               
              </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
