import React from "react";
import "../styles/ImageCard.css";

const getRandomTitle = () => {
	const titles = [
		"Sunset Bliss",
		"Mountain View",
		"Ocean Wave",
		"City Lights",
		"Forest Trail",
	];
	return titles[Math.floor(Math.random() * titles.length)];
};

const getRandomPrice = () => {
	return (Math.random() * 100).toFixed(2);
};

const ImageCard = ({ imageUrl }) => {
	const title = getRandomTitle();
	const price = getRandomPrice();
	return (
		<div className="image-card">
			<img src={imageUrl} alt={title} />
			<div className="card-info">
				<h3>{title}</h3>
				<p>${price}</p>
			</div>
		</div>
	);
};

export default ImageCard;
