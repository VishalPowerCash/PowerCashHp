import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'animate.css/animate.min.css'; // Import Animate.css for animations
import './Navbar.css'; // Import custom CSS file for faster animations
import DropDownLink from './DropDownLink';

const Navbar = () => {
    const location = useLocation(); // Get current location for dynamic active class
    const [color1, setColor1] = useState("#ffffffaa")
    const [color2, setColor2] = useState("#ffffffaa")
    const [color3, setColor3] = useState("#ffffffaa")
    const [color4, setColor4] = useState("#ffffffaa")

    return (
        <nav className="navbar navbar-expand-md sticky-top">
            <div className="container-fluid d-flex justify-content-between">
                <Link to="/" className="navbar-brand ps-0  ps-md-3 ps-lg-4 ">
                    <img src="/images/powercashlogo.jpg" alt="Bootstrap" width="100" height="40" />
                </Link>

                {/* Toggle button for collapsing the navbar */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >

                    <i className="bi bi-menu-button-wide text-white"></i>
                </button>

                {/* Collapsable navbar content */}
                <div className="collapse navbar-collapse justify-content-center text-start  " style={{ fontWeight: "500" }} id="navbarNav">
                    <div className=''>
                        <ul className="navbar-nav ms-auto text-start"> {/* Left-align items in collapsed navbar */}
                            <li className="nav-item">
                                <Link
                                    to="/"
                                    className={`nav-link routeLinks ${location.pathname === '/' ? 'active' : ''}`}
                                >
                                    Home
                                </Link>
                            </li>

                            {/* Products Dropdown with faster animation */}
                            <li className="nav-item dropdown-end d-none d-md-inline">
                                <Link

                                    to="#"
                                    className="nav-link dropdown-toggle routeLinks  show"
                                    id="navbarDropdownProducts"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    style={{ color: color1 }}
                                    onMouseEnter={() => setColor1("white")}
                                    onMouseLeave={() => setColor1("#ffffffaa")}


                                >
                                    Products
                                </Link>
                                <ul
                                    className="dropdown-menu ms-5 animate__animated animate__fadeIn animate__faster"
                                    aria-labelledby="navbarDropdownProducts"
                                >
                                    <div className="d-flex">
                                        <div className=''>
                                            <li><Link className="dropdown-item" to="/products/anchor-finance"><DropDownLink imgSrc={"navbarDropdown/anchorLogo.svg"} heading={"Anchor Business Finance"} para={"Provides flexible business funding."} /></Link></li>
                                            <li><Link className="dropdown-item" to="/products/e-commerce"><DropDownLink imgSrc={"navbarDropdown/ECom.svg"} heading={"E-Commerce Lending"} para={"Provides financing for online business growth."} /></Link></li>
                                            <li><Link className="dropdown-item" to="/products/line-of-credit"><DropDownLink imgSrc={"navbarDropdown/locLogo.svg"} heading={"Line of Credit"} para={"Offers flexible, on-demand funds for business."} /></Link></li>

                                        </div>
                                        <div>

                                            <li><Link className="dropdown-item" to="/products/unsecured-loans"><DropDownLink imgSrc={"navbarDropdown/unsecured.svg"} heading={"Unsecured Business Loan"} para={"Provide funding without need for collateral."} /></Link></li>
                                            <li><Link className="dropdown-item" to="/products/rental-deposit"><DropDownLink imgSrc={"navbarDropdown/rental.svg"} heading={"Rental Deposit Financing "} para={"Covers rental deposits for businesses."} /></Link></li>
                                        </div>
                                    </div>
                                </ul>
                            </li>

                            {/* Partners Dropdown with faster animation */}
                            <li className="nav-item dropdown-center d-none d-md-inline">
                                <Link
                                    to="#"
                                    className="nav-link dropdown-toggle routeLinks "
                                    id="navbarDropdownPartners"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    style={{ color: color2 }}
                                    onMouseEnter={() => setColor2("white")}
                                    onMouseLeave={() => setColor2("#ffffffaa")}
                                >
                                    Partners
                                </Link>
                                <ul
                                    className="dropdown-menu ms-5 animate__animated animate__fadeIn animate__faster list-unstyled"
                                    aria-labelledby="navbarDropdownPartners"
                                >
                                    <li><Link className="dropdown-item" to="/partners/anchor-business"><DropDownLink imgSrc={"navbarDropdown/ECom.svg"} heading={"Anchor Business"} para={"Partners with companies for financial solutions."} /></Link></li>
                                    <li><Link className="dropdown-item" to="/partners/rental-depositing"><DropDownLink heading={"Rental Depositing"} imgSrc={"navbarDropdown/ECom.svg"} para={"Flexible leasing solutions for equipment & property needs."} /></Link></li>
                                </ul>
                            </li>
                            <div className="d-inline d-md-none text-white text-start">
                                <div className="dropdown ">
                                    <a className=" dropdown-toggle nav-link nav-item routeLinks" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: color3 }}
                                        onMouseEnter={() => setColor3("white")}
                                        onMouseLeave={() => setColor3("#ffffffaa")}>
                                        Products
                                    </a>
                                    <ul className="dropdown-menu p-1">
                                        <li><Link className="dropdown-item" to="/products/anchor-finance"><DropDownLink imgSrc={"navbarDropdown/anchorLogo.svg"} heading={"Anchor Business Finance"} para={"Provides flexible business funding."} /></Link></li>
                                        <li><Link className="dropdown-item" to="/products/e-commerce"><DropDownLink imgSrc={"navbarDropdown/ECom.svg"} heading={"E-Commerce Lending"} para={"Provides financing for online business growth."} /></Link></li>
                                        <li><Link className="dropdown-item" to="/products/line-of-credit"><DropDownLink imgSrc={"navbarDropdown/locLogo.svg"} heading={"Line of Credit"} para={"Offers flexible, on-demand funds for business."} /></Link></li>

                                        <li><Link className="dropdown-item" to="/products/unsecured-loans"><DropDownLink imgSrc={"navbarDropdown/unsecured.svg"} heading={"Unsecured Business Loan"} para={"Provide funding without need for collateral."} /></Link></li>
                                        <li><Link className="dropdown-item" to="/products/rental-deposit"><DropDownLink imgSrc={"navbarDropdown/rental.svg"} heading={"Rental Deposit Financing "} para={"Covers rental deposits for businesses."} /></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="d-inline d-md-none text-white text-start">
                                <div className="dropdown ">
                                    <a className=" dropdown-toggle nav-link routeLinks nav-item" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: color4 }}
                                        onMouseEnter={() => setColor4("white")}
                                        onMouseLeave={() => setColor4("#ffffffaa")}>
                                        Partners
                                    </a>
                                    <ul className="list-unstyled dropdown-menu p-1">
                                        <li><Link className="dropdown-item" to="/partners/anchor-business"><DropDownLink imgSrc={"navbarDropdown/ECom.svg"} heading={"Anchor Business"} para={"Partners with companies for financial solutions."} /></Link></li>
                                        <li><Link className="dropdown-item" to="/partners/rental-depositing"><DropDownLink heading={"Rental Depositing"} imgSrc={"navbarDropdown/ECom.svg"} para={"Flexible solutions for property needs."} /></Link></li>
                                    </ul>
                                </div>
                            </div>

                            <li className="nav-item">
                                <Link
                                    to="/about"
                                    className={`nav-link routeLinks ${location.pathname === '/about' ? 'active' : ''}`}
                                >
                                    About
                                </Link>
                            </li>
                            <li className="nav-item d-block d-md-none">
                                <Link
                                    to="/contact"
                                    className={`nav-link routeLinks ${location.pathname === '/contact' ? 'active' : ''}`}
                                >
                                    Contact
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link
                                    to="/hiring"
                                    className={`nav-link routeLinks ${location.pathname === '/hiring' ? 'active' : ''}`}
                                >
                                    We're Hiring!
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
                <Link className='btn btn-primary rounded-3 d-none d-md-block p-1 px-2 me-lg-4' style={{ width: "110px", fontSize: "1rem", backgroundColor: "#0059ff" }} to="/contact">Contact Us</Link>
            </div >
        </nav >
    );
};

export default Navbar;
