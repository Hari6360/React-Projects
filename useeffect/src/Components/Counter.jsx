import React, { useState } from "react";

const Counter = () => {
	const [count, setCount] = useState(1);

	const handleClick = () => {
		return setCount((prev) => prev + 1);
	};
	return (
		<div>
			<h1>Counter:{count}</h1>
			<button onClick={handleClick}>Add</button>
		</div>
	);
};

export default Counter;
