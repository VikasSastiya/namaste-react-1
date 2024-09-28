import React from "react";
import ReactDOM from "react-dom/client";


// how to put react element inside element

const elem=<span>React Element</span>




const Title=()=>(

   <h1 className="head" tabIndex="5">
    {elem}

    Namaste React using JSX
    </h1>
    ); 
    // whatever we write in This {} brackets count as javascript code
    
   const HeadingComponent=()=>(  
     <div id="container">
        
            <Title/>             
     <h1 className="heading">Namaste React Functional Component</h1>
     </div>
);


const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);

// we cannot use functional component as it is in root.render() we write like this root.render(<HeadingComponent/>); which babel can understand