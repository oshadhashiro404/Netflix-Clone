import React, { useState, useEffect } from 'react';
import './Navbar.css';
import Logo from '../assets/Logo.png';

function Navbar() {
	const [show, handleShow] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 100) {
				handleShow(true);
			} else handleShow(false);
		});

		return () => {
			window.removeEventListener('scroll');
		};
	}, []);

	return (
		<div className={`navbar ${show && 'navbar__blank'}`}>
			<img className="navbar__logo" src={Logo} alt="Netflix Logo" />
			<img
				className="navbar__avatar"
				src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
				alt="Netflix Logo"
			/>
		</div>
	);
}

export default Navbar;
