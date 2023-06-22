//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
let number=-1;
setInterval(()=>{
    number++;
    ReactDOM.render(<Home number={number}/>, document.querySelector("#app"));
},1000)
//render your react application
