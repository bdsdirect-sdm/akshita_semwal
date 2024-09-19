import React from "react";
import logo from "../images/logo.png";
import "./styles.css";

export default function Header(){
    return(<>
    <nav className="navbar-light navbar">
        <div className="container py-4">
            <a className="navbar-brand" href="#">
                <img src={logo} alt="logo" width="180" height="35"></img>
            </a>
            <div className="">
            <ul className="nav justify-content-end">
                <li className="nav-item"><a href="#" className="nav-link text-white fs-5 text-decoration-underline">Home</a></li>
                <li className="nav-item"><a href="#" className="nav-link text-white fs-5">Services</a></li>
                <li className="nav-item"><a href="#" className="nav-link text-white fs-5">Why Us</a></li>
                <button className="nav-item text-[#445CD5] fs-5 px-4 py-2 border-0 rounded-5">Contact Us</button>
            </ul>
            </div>
            
        </div>

    </nav>
            

    </>);
}