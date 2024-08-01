import React, { useEffect, useState } from "react";
import axios from "axios";

const Problem1 = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [mouseMove, setMouseMove] = useState(0);
	const [count, setCount] = useState(0);

	useEffect(() => {
		const getData = async () => {
			setLoading(true);
			try {
				const res = await axios.get(
					"https://jsonplaceholder.typicode.com/users"
				);
				setData(res.data);
				setLoading(false);
				setError(false);
			} catch (error) {
				console.log(error);
				setLoading(false);
				setError(true);
			}
		};

		getData();
	}, []);

	useEffect(() => {
		const handleMove = (e) => {
			setMouseMove(e.clientX);
		};
		window.addEventListener("mousemove", handleMove);
		return () => {
			window.removeEventListener("mousemove", handleMove);
		};
	}, []);

	useEffect(() => {
		document.title = `You clicked ${count} times`;
		return () => {
			document.title = "React App"; // Resetting to a default title
		};
	}, [count]);

	const styles = {
		container: {
			textAlign: "center",
			padding: "20px",
			fontFamily: "Arial, sans-serif",
		},
		titleSection: {
			marginBottom: "20px",
		},
		title: {
			fontSize: "24px",
			marginBottom: "10px",
		},
		button: {
			backgroundColor: "#007bff",
			color: "white",
			border: "none",
			padding: "10px 20px",
			margin: "5px",
			borderRadius: "5px",
			cursor: "pointer",
			fontSize: "16px",
		},
		dataSection: {
			marginBottom: "20px",
		},
		userCard: {
			border: "1px solid #ddd",
			padding: "10px",
			marginBottom: "10px",
			borderRadius: "5px",
			boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
		},
		userName: {
			fontSize: "18px",
			margin: "5px 0",
		},
		userEmail: {
			fontSize: "16px",
			color: "#555",
		},
		mouseTrackerSection: {
			marginTop: "20px",
		},
		mouseTrackerTitle: {
			fontSize: "20px",
			marginBottom: "10px",
		},
		mousePosition: {
			fontSize: "16px",
		},
	};
	return (
		<div style={styles.container}>
			<div style={styles.titleSection}>
				<h1 style={styles.title}>Title Updater</h1>
				<button onClick={() => setCount(count + 1)} style={styles.button}>
					Click me
				</button>
			</div>
			<div style={styles.dataSection}>
				{loading ? (
					<p>Loading...</p>
				) : error ? (
					<p>Something went wrong...</p>
				) : (
					data.map((e) => (
						<div key={e.id} style={styles.userCard}>
							<h3 style={styles.userName}>Name: {e.name}</h3>
							<h5 style={styles.userEmail}>Email: {e.email}</h5>
						</div>
					))
				)}
			</div>
			<div style={styles.mouseTrackerSection}>
				<h1 style={styles.mouseTrackerTitle}>Mouse Tracker</h1>
				<p style={styles.mousePosition}>Mouse Position: {mouseMove}</p>
			</div>
		</div>
	);
};

export default Problem1;
