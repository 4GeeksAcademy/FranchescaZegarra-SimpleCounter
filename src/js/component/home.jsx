import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import Number from "./Number.jsx"

//create your first component
const Home = (props) => {
	console.log(props.number);
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
			<p>{props.number}</p>
			<Number number={props.number} position={1}/>
			<Number number={props.number} position={2}/>
			<Number number={props.number} position={3}/>
			<Number number={props.number} position={4}/>
			<Number number={props.number} position={5}/>
			<Number number={props.number} position={6}/>
		</div>
	);
	
};

export default Home;
