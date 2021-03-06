import React from "react";
import "./DevelopmentPage.scss";
import UncontrolledLottie from "./../LottiesAnimations/UncontrolledLottie";

const DevelopmentPage = () => {
	return (
		<div className="container">
			{/* MOBILE & TABLET */}
			<div id="smaller">
				<h1 className="slide-top">
					Hello, I’m <span className="primary-color">Ósk Björns</span>
				</h1>
				<div className="text-holder">
					<p>
						I graduated in January 2022 with a bachelor's degree in Web
						Development from KEA, Copenhagen, and I specialize in{" "}
						<span className="primary-color">frontend development</span>
					</p>
					<div className="img-holder">
						<UncontrolledLottie height={200} width={320} />
					</div>
					<p>
						My portfolio site is currently under development and will be ready
						soon!
					</p>
					<p>
						<span className="highligt">Meanwhile</span>, check out my{" "}
						<a href="https://www.linkedin.com/in/osk-bjorns/" className="link">
							LinkedIn
						</a>{" "}
						page for more information about me and my work on{" "}
						<a
							href="https://github.com/OskinB?tab=repositories"
							className="link"
						>
							GitHub
						</a>
						. You can contact me on LinkedIn or by email at{" "}
						<span className="primary-color">osk.bjorns90@gmail.com</span>
					</p>
				</div>
			</div>

			{/* DESKTOP */}
			<div id="desktop">
				<div className="text-holder">
					<h1 className="slide-top">
						Hello, I’m <span className="primary-color">Ósk Björns</span>
					</h1>
					<p>
						I graduated in January 2022 with a bachelor's degree in Web
						Development from KEA, Copenhagen, and I specialize in{" "}
						<span className="primary-color">frontend development</span>
					</p>
					<p>
						My portfolio site is currently under development and will be ready
						soon!
					</p>
					<p>
						<span className="highligt">Meanwhile</span>, check out my{" "}
						<a href="https://www.linkedin.com/in/osk-bjorns/" className="link">
							LinkedIn
						</a>{" "}
						page for more information about me and my work on{" "}
						<a
							href="https://github.com/OskinB?tab=repositories"
							className="link"
						>
							GitHub
						</a>
						. You can contact me on LinkedIn or by email at{" "}
						<span className="primary-color">osk.bjorns90@gmail.com</span>
					</p>
				</div>
				<div className="img-holder">
					<UncontrolledLottie height={480} width={480} />
				</div>
			</div>
		</div>
	);
};
export default DevelopmentPage;
