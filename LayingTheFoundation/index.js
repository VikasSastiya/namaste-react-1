import React from "react";
import ReactDOM from "react-dom/client";

// React Element



const Title=()=>(
   <h1 className="head" tabIndex="5">
    Namaste React using JSX
    </h1>
    ); 
    
   // ReactComponent
   // Class Based Component - OLD - nobudy use classbased Component now a days
   // Functional Component - NEW -a function which gives functional component 

//    what is a React Functional component - just javascript function
const HeadingComponent=()=>(      // here is an example of component composition as title element is composed to function
           <div id="container">
            <Title/>             
     <h1 className="heading">Namaste React Functional Component</h1>
     </div>
);


const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);

// we cannot use functional component as it is in root.render() we write like this root.render(<HeadingComponent/>); which babel can understand