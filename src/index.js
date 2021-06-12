// // const element = document.createElement("h1");
// // element.innerText = "Hello, Platzi Badges";
// // const container = document.getElementById("app");

// // container.appendChild(element);

// import React from "react";
// import ReactDOM from "react-dom";

// // const jsx = <h1>Hello, Platzi Badges from React</h1>;
// // const element = React.createElement(
// //   "a",
// //   {href: "https://platzi.com"},
// //   "Ir a Platzi"
// // );

// // const name = "Roxana";
// // const sum = () => 3 + 3;
// // const element = React.createElement("h1", {}, `Hola, soy ${name}`);
// // const jsx = <h1>Hola, soy, {__expresiones__}</h1>;
// // const jsx = <h1>Hola, soy, {null}</h1>;

// const jsx = (
//   <div>
//     <h1>Hola, Soy Noe</h1>
//     <p>Soy Ingeniero frontend</p>
//   </div>
// );

// const element = React.createElement(
//   "div",
//   {},
//   React.createElement("h1", {}, "Hola Soy Richard"),
//   React.createElement("p", {}, "Soy Escarly")
// );

// const container = document.getElementById("app");
// // ReactDOM.render(__qué__, __dónde__);
// ReactDOM.render(element, container);

import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

import "./global.css";

import App from "./components/App";

const container = document.getElementById("app");
ReactDOM.render(<App />, container);
