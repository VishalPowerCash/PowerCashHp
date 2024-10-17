import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Optional, for additional custom styles
import BankLogosDiv from './BankLogosDiv';

const Footer = () => {
    return (
        <footer className="text-light py-4">
            <BankLogosDiv />
            <div className="container">
                <div className="row">
                    {/* PowerCash Column */}
                    <div className="col-md-4 mb-4">
                        <h5 className="">PowerCash</h5>
                        <ul className="list-unstyled">
                            <li className="footerLi"><Link to="/contact" className="">Contact Us</Link></li>
                            <li className="footerLi"><Link to="/about" className="">About Us</Link></li>
                        </ul>
                    </div>

                    {/* Products Column */}
                    <div className="col-md-4 mb-4">
                        <h5 className="">Products</h5>
                        <ul className="list-unstyled">
                            <li className="footerLi"><Link to="/products/anchor-finance" className="">Anchor Business Finance</Link></li>
                            <li className="footerLi"><Link to="/products/e-commerce" className="">E-Commerce Lending</Link></li>
                            <li className="footerLi"><Link to="/products/line-of-credit" className="">Line of Credit</Link></li>
                            <li className="footerLi"><Link to="/products/unsecured-loans" className="">Unsecured Business Loans</Link></li>
                            <li className="footerLi"><Link to="/products/rental-deposit" className="">Rental Deposit Financing</Link></li>
                        </ul>
                    </div>

                    {/* Resources Column */}
                    <div className="col-md-4 mb-4">
                        <h5 className="">Resources</h5>
                        <ul className="list-unstyled">
                            <li className="footerLi"><Link to="/hiring" className="">We’re Hiring!</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="d-flex flex-column-reverse flex-md-row justify-content-between mt-3 mx-3">
                    <div className='d-flex justify-content-center flex-wrap'>
                        <div style={{ color: "#ffffffa3" }}>&copy; 2024 PowerCash. All Rights Reserved.</div>
                        <div><Link to="/user-agreement" className='ms-3'>User Agreement</Link></div>
                        <div><Link to="privacy" className='ms-3'>Privacy Policy</Link></div>
                    </div>
                    <div className='mb-2'>
                        <a href="https://x.com/POWERCASH15/" target="_blank" rel="noopener noreferrer" className="text-light ">
                            <i className="bi bi-twitter ms-2"></i>
                        </a>
                        <a href="https://www.facebook.com/powercash.co.in/" target="_blank" rel="noopener noreferrer" className="text-light ">
                            <i className="bi bi-facebook ms-2"></i>
                        </a>
                        <a href="https://www.instagram.com/powercash_/?igsh=eGtrZDlrZm50ZG80" target="_blank" rel="noopener noreferrer" className="text-light ">
                            <i className="bi bi-instagram ms-2"></i>
                        </a>
                        <a href="https://www.linkedin.com/company/powercash" target="_blank" rel="noopener noreferrer" className="text-light ">
                            <i className="bi bi-linkedin ms-2"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
