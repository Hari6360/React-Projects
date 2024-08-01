import React from "react";
import "../styles/Navbar.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="navbar-logo">Gallery</div>
			<div className="navbar-links">
				<a href="#home">
					<i className="fas fa-home"></i> Home
				</a>
				<a href="#gallery">
					<i className="fas fa-image"></i> Gallery
				</a>
				<a href="#contact">
					<i className="fas fa-envelope"></i> Contact
				</a>
				<a href="#about">
					<i className="fas fa-info-circle"></i> About
				</a>
			</div>
			<div className="navbar-hamburger">
				<i className="fas fa-bars"></i>
			</div>
		</nav>
	);
};

export default Navbar;
