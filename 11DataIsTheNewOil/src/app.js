import React,{lazy,Suspense, useEffect,useState} from "react";   
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
// import Grocery from "./components/Grocery";

    // Chunking - to break down our app to smaller chunks so you don't put load on single bundle
    // Code Splitting
    // Dynamic bundling
    // lazy loading - ondemand loading-search it (dynamic import)

         const Grocery=lazy(()=>import("./components/Grocery"));  // lazy is a react package 
    
       const About=lazy(()=>import("./components/About"));

const AppLayout=()=> {
    // console.log(<Body/>);  // this is virtual dom

      
      const [userName,setUserName]=useState();

      // authentication
       useEffect(()=>{
        // Make an API call and send username and password
          const data={
            name:"Akshay Saini",
          };
          setUserName(data.name);
       },[]);

    return (
        <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
        <div className="app">
            
           
                {/* <UserContext.Provider value={{loggedInUser:"Elon Musk"}}>
                 <Header/>       
                </UserContext.Provider> */}  {/*if we write this only elon musk get printed in header*/}
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
        </UserContext.Provider>

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
                element:<Suspense fallback={<h1>Loading....</h1>}><About/></Suspense>,
            },
            {
                path:"/contact",
                element:<Contact/>,  
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<h1>Loading....</h1>}><Grocery/></Suspense>
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