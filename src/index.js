//Create a react app from scratch.
import React from "react";
import ReactDom from "react-dom";
//It should display 2 paragraph HTML elements.
const fname = "Brian";
const lname = "Cheek";
//const currentYear = Date().split(' ')[3];
const date = new Date();
const currentYear = date.getFullYear();
const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black"
};

customStyle.color = "blue";
customStyle.fontSize = "40px";

//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
ReactDom.render(
  <div>
    <h1 style={customStyle}>Hello World</h1>
    <p>Created by {fname + " " + lname}</p>
    <p>Copyright {currentYear}</p>
  </div>,
  document.getElementById("root")
);
