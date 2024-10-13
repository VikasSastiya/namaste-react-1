import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
    
const AppLayout=()=> {
    console.log(<Body/>);  // this is virtual dom
    return (
        <div className="app">
           <Header/>
           {/* {So we see if path is / then <Body/> component is displayed in screen
           if path is /about then <About/> component is displayes on screen 
           if path is /contact then <Contact/> component is displayed on screen 
           
           we have to push the children over here acouding to route
           
           so we have to load children according to its outlet so again react-router-dom gives Outlet component
           */}
            <Outlet/>
            {/* so if the rout is / outlet gives <Body/> ,if route is about outlet
            will be <About/> and vice-versa
             */}
           
        </div>
    );
};

const appRouter=createBrowserRouter([
    {
        path:"/",   // means if path is / load my <AppLayout/>
        element:<AppLayout/>,
        children:[         // this is children route now about and contact become children of appLayout
           {
                  path:"/",
                  element:<Body/>
           },
            {
                path:"/about",
                element:<About/>,
            },
            {
                path:"/contact",
                element:<Contact/>,  
            },  
            {
                path:"/cart",
                element:<Cart/>,
            },{
                path:"restaurants/:resId",
                element:<RestaurantMenu/>
            }
        ],
        errorElement:<Error/>
    },
    // {
    //     path:"/about",
    //     element:<About/>,
    // },
    // {
    //     path:"/contact",
    //     element:<Contact/>,
    // },
]);   // create browser router takes alist of path,path is nothinng but object

const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout/>);    // RouterProvider provides routing configuration through our app ,earlierwe were render this app layour directly
 root.render(<RouterProvider router={appRouter}/>);  // now instead of this i will routing configuration 