import {LOGO_URL} from "../utils/constants";
import { useState } from "react";

const Header=()=> {

    let btnName="Login";

    const [btnNameReact,setBtnNameReact]=useState("Login");
// as I click to the button react update this btnNameReact variable and also refresh the header component
    // it trigger the reconcilation cycle
    
    // is react refreshing the whole hedderor modifying button
    // it will rerenderthr whole component- refresh quickly

    // how constant value updated/ modified why?- whenever you update thisvalue it ias calling this function once again when you envok
    // function btn variable is new variable then it was before
return (
        <div className="header">
            <div className="logo-container">
                <img className="logo"
                 src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
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