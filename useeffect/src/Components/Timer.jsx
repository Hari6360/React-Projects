import React, { useEffect, useState } from "react";

const Timer = () => {
	const [time, setTime] = useState(new Date().toLocaleTimeString());
	const [scroll, setScroll] = useState();

	useEffect(() => {
		const timer = setInterval(() => {
			setTime(new Date().toLocaleTimeString());
		}, 1000);

		return () => {
			clearInterval(timer);
		};
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollX;
			console.log("Scroll Position:", scrollPosition);
			setScroll(scrollPosition);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div style={{ height: "2000px" }}>
			<div>
				<h1>Current Time: {time}</h1>
			</div>
			<div>Scroll Position: {scroll}px</div>
		</div>
	);
};

export default Timer;
