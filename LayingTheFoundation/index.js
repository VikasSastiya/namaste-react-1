import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Object => HTMLElement(render)

const heading=React.createElement("h1",{id:"heading"},"Namaste react");

const root=React.createRoot(document.getElementById("root"));

root.render(heading);