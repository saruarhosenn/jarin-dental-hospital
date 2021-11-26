import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Header.css";
import logo from "../../Images/logo.png";
import useAouth from '../../Hooks/useAouth';

const Header = () => {
	const { user, logOut } = useAouth();
	return (
		<header className="pt-3 shadow">
			<nav className="container position-relative">
				<div className="contact-info pb-2 pb-md-0">
					<ul className="text-end">
						<li className="d-inline-block">
							<span className="me-2"><i class="fas fa-phone-alt"></i></span>
							<span>+8801750543533</span>
						</li>
						<li className="d-inline-block ms-3">
							<span className="me-2"><i class="fas fa-envelope"></i></span>
							<span>saruarhosen525@gmail.com</span>
						</li>
					</ul>
				</div>

				<div class="navbar navbar-expand-lg navbar-light align-items-center">
					<div className="logo">
						<Link to="/home" className="fw-bold t-color-23 size-18">
							<p className="mb-1">
								<span className="me-2">JARIN</span>
								<img src={logo} alt="dental" />
							</p>
							<p>DENTAL CENTER</p>
						</Link>
					</div>

					<div className="menu-icon d-blobk d-lg-none" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="bg-23 d-block"></span>
						<span className="bg-23 d-block my-2"></span>
						<span className="bg-23 d-block"></span>
					</div>

					<div class="collapse navbar-collapse justify-content-end" id="navbarNav">
						<ul class="navbar-nav align-items-lg-center main-menu">
							<li class="nav-item mb-1 mb-lg-0">
								<NavLink to="/home" className="text-center tran-2 d-block d-lg-inline-block menu-link bg-7f text-white px-3 py-2">Home</NavLink>
							</li>
							<li class="nav-item mb-1 mb-lg-0 ms-lg-1">
								<NavLink to="/about" className="text-center tran-2 d-block d-lg-inline-block menu-link bg-7f text-white px-3 py-2">About</NavLink>
							</li>
							<li class="nav-item mb-1 mb-lg-0 ms-lg-1">
								<NavLink to="/services" className="text-center tran-2 d-block d-lg-inline-block menu-link bg-7f text-white px-3 py-2">Services</NavLink>
							</li>
							<li class="nav-item mb-1 mb-lg-0 ms-lg-1">
								<NavLink to="/dentists" className="text-center tran-2 d-block d-lg-inline-block menu-link bg-7f text-white px-3 py-2">Dentists</NavLink>
							</li>
							<li class="nav-item mb-1 mb-lg-0 ms-lg-1">
								<NavLink to="/contact" className="text-center tran-2 d-block d-lg-inline-block menu-link bg-7f text-white px-3 py-2">Contact</NavLink>
							</li>
							{

								!user?.email ? 
									<li class="nav-item mb-1 mb-lg-0 ms-lg-1">
										<NavLink to="/signin" className="text-center tran-2 d-block d-lg-inline-block menu-link bg-7f text-white px-3 py-2">Sign In</NavLink>
									</li>
								:
									<div className="log-out nav-iem d-lg-flex align-items-lg-center ms-lg-1">
										<button onClick={logOut} className="tran-2 d-block menu-link bg-7f text-white px-3 py-2">Log Out</button>
										<div className="user mt-3 mt-lg-0 ms-lg-4">
											<div className="user-img text-center mb-2">
												<img src={user.photoURL} alt="" className="rounded-circle" />
											</div>
											<div className="user-info text-center">
												<h4 className="size-16 t-color-23 fw-bold">{user.displayName}</h4>
											</div>
										</div>
									</div>
							}
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;