<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>React Template</title>
	</head>
	<body>
		<div id="root"></div>
	</body>
	<script src="https://www.unpkg.com/react@18.2.0/umd/react.development.js"></script>
	<script src="https://www.unpkg.com/react-dom@18.2.0/umd/react-dom.development.js"></script>
	<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
	<script type="text/babel">
		const element = React.createElement(
			"p",
			{ className: "text" },
			"Seize the day"
		);

		const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
		reactRoot.render(element);
	</script>
</html>
