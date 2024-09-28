import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement =>gives you an ReactElement-JS Object => HTMLElement(render)


const heading=React.createElement("h1",
    {id:"heading"},
    "Namaste React"
       );

console.log(heading);

// JSX (transpiled before it reaches the JS Engine) - transpilation is done by PARCEL - Babel(FOR MORE INFORMATION please must visit babel.io)
const jsxHeading=(
   <h1 className="head" tabIndex="1">
    Namaste React using JSX
    </h1>
    );   //  this is JSX-
// JSX is not html inside javascript ,JSX is a HTML like syntex or XML like syntax

// JSx is syntex ,react element is an object



console.log(jsxHeading);
const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);