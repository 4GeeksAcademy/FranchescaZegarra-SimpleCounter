import React from "react";

import Number from "./Number.jsx"
import Container from "./container";
import SubContainer from "./subContainer"

//create your first component
const Home = (props) => {
	const numbers=[6, 5, 4, 3, 2, 1];
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Diferentes Relojes</h1>
			<h2>Cronómetro</h2>
			<Container>
				<SubContainer>
					<svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" fill="white" className="bi bi-stopwatch-fill" viewBox="0 0 16 16">
						<path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07A7.001 7.001 0 0 0 8 16a7 7 0 0 0 5.29-11.584.531.531 0 0 0 .013-.012l.354-.354.353.354a.5.5 0 1 0 .707-.707l-1.414-1.415a.5.5 0 1 0-.707.707l.354.354-.354.354a.717.717 0 0 0-.012.012A6.973 6.973 0 0 0 9 2.071V1h.5a.5.5 0 0 0 0-1h-3zm2 5.6V9a.5.5 0 0 1-.5.5H4.5a.5.5 0 0 1 0-1h3V5.6a.5.5 0 1 1 1 0z"/>
					</svg>
				</SubContainer>
				{numbers.map((number) => (
					<SubContainer key={number}>
						<Number number={props.number} position={number} />
					</SubContainer>
				))}
			</Container>
		</div>
	);
};

export default Home;
