// const Counter = () => {
// 	const [count, setCount] = React.useState(0);

// 	const handleAdd = () => {
// 		setCount(count + 1);
// 	};
// 	const handleSub = () => {
// 		setCount(count - 1);
// 	};

// 	return (
// 		<div>
// 			<h2>Counter:{count}</h2>
// 			<button onClick={handleAdd}>Increase</button>
// 			<button onClick={handleSub}>Decrease</button>
// 		</div>
// 	);
// };

// const Counter2 = () => {
// 	const [count2, setCount2] = React.useState(0);

// 	return (
// 		<div>
// 			<h2>counter2:{count2}</h2>
// 			<button
// 				onClick={() => {
// 					setCount2(count2 + 1);
// 				}}>
// 				Increase
// 			</button>
// 			<button
// 				onClick={() => {
// 					setCount2(count2 - 1);
// 				}}>
// 				Decrease
// 			</button>
// 		</div>
// 	);
// };

const TextInput = () => {
	const [text, setText] = React.useState("");
	const [error, setError] = React.useState("");

	const handleChange = (e) => {
		const value = e.target.value;
		setText(value);
		// console.log(text);
		let validate = validateText(text);
		setError(validate);
	};

	const validateText = (text) => {
		return text.length < 8 ? "Character must be 8" : "";
	};
	return (
		<div>
			<input
				type="text"
				placeholder="Enter Text"
				value={text}
				onChange={handleChange}
			/>
			<p>{text}</p>
			<p>{error}</p>
		</div>
	);
};

const App = () => {
	return (
		<div>
			{/* <Counter2 /> */}
			<TextInput />
			<h1>Hello world</h1>
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
