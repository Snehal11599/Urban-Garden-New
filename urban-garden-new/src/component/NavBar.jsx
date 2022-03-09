import React from 'react'
import { NavLink } from 'react-router-dom'
import '../index.css'

export default function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" >
                <img src='assets/HomeImages/gacoicon.png' />
                <div className="container-fluid">
                    <NavLink className="navbar-brand  mb-0 h1" to="/">GACO</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item py-md-2">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item dropdown py-md-2">
                                <a className="nav-link dropdown-toggle" to="/pages" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Pages
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li className="nav-item py-md-2">
                                        <NavLink className="nav-link" to="/gallery">Gallery</NavLink>
                                    </li>
                                    <li className="nav-item py-md-2">
                                        <NavLink className="nav-link" to="/testimonials">Testimonials</NavLink>
                                    </li>
                                    <li className="nav-item py-md-2">
                                        <NavLink className="nav-link" to="/faq">FAQ</NavLink>
                                    </li>
                                    <li className="nav-item py-md-2">
                                        <NavLink className="nav-link" to="/news">News</NavLink>
                                    </li>
                                    <li className="nav-item py-md-2">
                                        <NavLink className="nav-link" to="/singlenews">Single News</NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item py-md-2">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item py-md-2">
                                <NavLink className="nav-link" to="/service">Services</NavLink>
                            </li>
                            <li className="nav-item py-md-2">
                                <NavLink className="nav-link" to="/contactus">Contact Us</NavLink>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}
