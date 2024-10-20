import {LOGO_URL} from "../utils/constants";
import { useState,useEffect } from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header=()=> {

    let btnName="Login";

    const [btnNameReact,setBtnNameReact]=useState("Login");
   
    const onlineStatus=useOnlineStatus();
   
    console.log("Header render");
// as I click to the button react update this btnNameReact variable and also refresh the header component
    // it trigger the reconcilation cycle
         useEffect(()=> {
            console.log("useEffect called");   // if no dependency array => useEffect is called on every render
         },[btnNameReact]);      //  if dependency array is empty = [] => useEffect is called on initial render(just once)
         // if dependency array is [btnNameReact] => called everytime btnNameReact is updated
     
         // is react refreshing the whole hedderor modifying button
    // it will rerenderthr whole component- refresh quickly

    // how constant value updated/ modified why?- whenever you update thisvalue it ias calling this function once again when you envok
    // function btn variable is new variable then it was before
return (
        <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
            <div className="logo-container">
                <img className="w-56" src={LOGO_URL}/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
            <li className="px-4">
               Online Status: {onlineStatus ? <h1>online</h1> : <h1>offline</h1>}
                    </li>

                    <li className="px-4">
                        <Link to="/">Home</Link>

                    </li>
                    {/* <li><a href="/about">About Us</a></li> */}
                    {/* so it takes me to about us page but the problem is that the whole page gets refreshed by doing this it reload the page to resolve this issue import link from react-router-dom ,so ourreact app becomesingle page app */}
                    <li className="px-4">
                        <Link to="/About">About Us</Link>
                    </li>
                    <li className="px-4">
                    <Link to="/Contact">Contact Us</Link>

                    </li>
                     <li className="px-4">
                    <Link to="/grocery">Grocery</Link>

                    </li>
                    <li className="px-4">
                    <Link to="/cart">Cart</Link>
                    </li>
                     

                    <button className="login" 
                    onClick={ ()=>{
                        btnNameReact=="Login"?
                        setBtnNameReact("Logout"):
                        setBtnNameReact("Login");
                            // console.log(btnName);

                        // behind the seen as you call setBtnNameReact("Logout");
                        }
                        }
                        >{btnNameReact}</button>
                        
                </ul>
            </div>
        </div>
    );
   };

export default Header;