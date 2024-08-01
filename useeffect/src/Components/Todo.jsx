import React, { useEffect, useState } from "react";
import axios from "axios";

const Todo = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [loadingError, setLoadingError] = useState(false);
	const [page, setPage] = useState(1);

	const getData = async () => {
		const URL = `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`;

		let res = await axios.get(URL);
		return res.data;
	};
	useEffect(() => {
		setLoading(true);

		getData()
			.then((res) => {
				console.log(res);
				setData(res);
				setLoading(false);
				setLoadingError(false);
			})
			.catch((err) => {
				console.log(err);
				setLoading(false);
				setLoadingError(true);
			});
	}, [page]);

	const handlePrev = () => {
		setPage((prev) => prev - 1);
	};

	const containerStyle = {
		textAlign: "center",
		padding: "20px",
		fontFamily: "Arial, sans-serif",
	};
	const headingStyle = {
		fontSize: "24px",
		marginBottom: "10px",
	};
	return (
		<div style={containerStyle}>
			<h1 style={headingStyle}>Todo Application</h1>
			{loading ? (
				<h2>Loading...</h2>
			) : loadingError ? (
				<h2>Something Went wrong</h2>
			) : (
				data.map((el) => {
					return (
						<div key={el.id}>
							<h1>{el.title}</h1>
						</div>
					);
				})
			)}
			<div>
				<div>Page No:{page}</div>
				<button onClick={handlePrev} disabled={page === 1}>
					Prev
				</button>
				<button
					onClick={() => {
						setPage(page + 1);
					}}>
					Next
				</button>
			</div>
		</div>
	);
};

export default Todo;
