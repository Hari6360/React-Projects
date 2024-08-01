import React from "react";
import ImageCard from "./ImageCard";
import "../styles/Gallery.css";
const Gallery = () => {
	const imageUrls = [
		"https://th.bing.com/th/id/OIP.yRXC9KiW4yPWixy1-0H09gHaE7?w=241&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
		"https://th.bing.com/th/id/OIP.-DfTGG5Z34Y8Y2RyAMUnrgHaE8?w=273&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7",
		"https://th.bing.com/th/id/OIP.byd7q26493d7s4wDUX-7FAHaE8?w=270&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
		"https://th.bing.com/th/id/OIP.c-Akef6UJqHOmCenuYxtpwHaEO?w=283&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
		"https://th.bing.com/th/id/OIP.aP-uEZgvpraVI7Nv91548wHaHa?w=177&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
	];

	return (
		<div className="gallery">
			{imageUrls.map((url, index) => (
				<ImageCard key={index} imageUrl={url} />
			))}
		</div>
	);
};

export default Gallery;
