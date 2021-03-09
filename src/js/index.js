//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home";
//import { Practica } from "./component/practica";
//import { PeopleCards } from "./component/peoplecards";
//import { ClockDate } from "./component/clockdate";

//ReactDOM.render(<ClockDate />, document.querySelector("#app"));
// ReactDOM.render(<PeopleCards />, document.querySelector("#app"));
// ReactDOM.render(<Practica />, document.querySelector("#app"));
ReactDOM.render(<Home />, document.querySelector("#app"));
