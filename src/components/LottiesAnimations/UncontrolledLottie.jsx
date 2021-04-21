// UncontrolledLottie.jsx
import React from "react";
import Lottie from "react-lottie";
// import animationData from "./28595-website-building-lottie-animation.json";
import animationData from "./lf30_editor_oixcon9g.json";

const UncontrolledLottie = ({height, width}) => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	return (
		<div>
			<Lottie options={defaultOptions} height={height} width={width} />
		</div>
	);
};

export default UncontrolledLottie;
