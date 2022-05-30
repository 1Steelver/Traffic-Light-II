import React, { useState } from "react";

const Home = () => {
	const [isGreen, setIsGreen] = useState(false);
	const [isYellow, setIsYellow] = useState(false);
	const [IsRed, setIsRed] = useState(false);

	const onGreen = () => {
		setIsGreen(true);
		setIsYellow(false);
		setIsRed(false);
	};

	const onYellow = () => {
		setIsGreen(false);
		setIsYellow(true);
		setIsRed(false);
	};

	const onRed = () => {
		setIsGreen(false);
		setIsYellow(false);
		setIsRed(true);
	};

	const rectangulo = {
		with: "150px",
		height: "350px",
		border: "3px solid #555",
		background: "#000000",
	};
	return (
		<div
			className="d-flex flex-column at-5 text-center mx-auto"
			style={rectangulo}>
			<p style={{color:"blue"}}>Traffic-Light</p>
			<div className="col">
				<button
					onClick={() => onGreen()}
					className={`${
						isGreen === true ? "bg-success" : ""
					} rounded-circle p-5`}></button>

				<button
					onClick={() => onYellow()}
					className={`${
						isYellow === true ? "bg-warning" : ""
					} rounded-circle p-5`}></button>

				<button
					onClick={() => onRed()}
					className={`${
						IsRed === true ? "bg-danger" : ""
					} rounded-circle p-5`}></button>
			</div>
		</div>
	);
};

export default Home;
