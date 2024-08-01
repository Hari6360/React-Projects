// src/App.js
import React from "react";
import Navbar from "./Components/Navbar";
import Gallery from "./Components/Gallery";
import "./styles/Gallery.css";
import "./styles/ImageCard.css";
import "./styles/Navbar.css";

const App = () => {
	return (
		<div>
			<Navbar />
			<Gallery />
		</div>
	);
};

export default App;
