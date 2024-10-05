import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error"
    
const AppLayout=()=> {
    console.log(<Body/>);  // this is virtual dom
    return (
        <div className="app">
           <Header/>
           <Body/>
        </div>
    );
};

const appRouter=createBrowserRouter([
    {
        path:"/",   // means if path is / load my <AppLayout/>
        element:<AppLayout/>,
        errorElement:<Error/>
    },
    {
        path:"/about",
        element:<About/>,
    },
    {
        path:"/contact",
        element:<Contact/>,
    },
]);   // create browser router takes alist of path,path is nothinng but object

const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout/>);    // RouterProvider provides routing configuration through our app ,earlierwe were render this app layour directly
 root.render(<RouterProvider router={appRouter}/>);  // now instead of this i will routing configuration 