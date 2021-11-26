import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";

const Footer = () => {
	return (
		<footer className="pt-70 bg-23">
			<div className="container">
				<div className="row g-4 mb-5">
				<div className="col-lg-3 col-md-4 col-sm-6">
						<div className="menu-links">
							<h3 className="text-light fw-500 size-25 mb-4">Address</h3>
							<address>
								<p className="text-white mb-2">Sylhet - Ambarkhana</p>
								<p className="text-white mb-2">Sylhet - Ambarkhana - Traffic Police Point</p>
								<p className="text-white mb-2">+8801750543533</p>
								<p className="text-white">saruarhosen525@gmail.com</p>
							</address>
						</div>
					</div>
					<div className="col-lg-2 col-md-3 col-sm-4 ms-sm-auto ms-md-0">
						<div className="menu-links">
							<h3 className="text-light fw-500 size-25 mb-4">Menu Links</h3>
							<ul>
								<li className="mb-2">
									<Link to="/home" className="link text-center text-light fw-500 tran-2">Home</Link>
								</li>
								<li className="mb-2">
									<Link to="/about" className="link text-center text-light fw-500 tran-2">About</Link>
								</li>
								<li className="mb-2">
									<Link to="/services" className="link text-center text-light fw-500 tran-2">Services</Link>
								</li>
								<li className="mb-2">
									<Link to="/courses" className="link text-center text-light fw-500 tran-2">Dentists</Link>
								</li>
								<li className="">
									<Link to="/contact" className="link text-center text-light fw-500 tran-2">Contact</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-xl-3 col-lg-4 col-md-5 col-sm-6">
						<div className="open-titme">
							<h3 className="text-light fw-500 size-25 mb-4">Opening Hours</h3>
							<ul>
								<li className="mb-3 text-light d-flex justify-content-between">
									<span>Sat - Thus :</span>
									<span>02.00 pm - 10.00 pm</span>
								</li>
								<li className="text-light d-flex justify-content-between">
									<span>Friday :</span>
									<span>Closed</span>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-lg-3 col-sm-6 ms-xl-auto">
						<div className="social-links ps-sm-5 ps-md-0">
							<h3 className="text-light fw-500 size-25 mb-4">Connect With Us</h3>
							<ul>
								<li className="d-inline-block me-3">
									<a href="https://web.facebook.com/saruarhosenn/" className="tran-2 text-light bg-7f text-center rounded" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-f"></i></a>
								</li>
								<li className="d-inline-block me-3">
									<a href="https://www.linkedin.com/in/saruarhosenn/" className="tran-2 text-light bg-7f text-center rounded" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in"></i></a>
								</li>
								<li className="d-inline-block me-3">
									<a href="https://twitter.com/saruarhosenn/" className="tran-2 text-light bg-7f text-center rounded" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
								</li>
								<li className="d-inline-block">
									<a href="https://www.instagram.com/saruarhosenn/" className="tran-2 text-light bg-7f text-center rounded" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>								
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="copyright text-center py-5">
					<p className="text-light">Copyright &copy; 2021 Saruar Hosen All Rights Reserved.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;