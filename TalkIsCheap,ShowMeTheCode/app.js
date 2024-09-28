import React from "react";
import ReactDOM from "react-dom/client";
/**
 * Header
 *  -Logo
 *  - Nav Items
 * Body
 *   -Search
 *   -RestaurantContainer
 *     - RestaurantCard
 *      - Img
 *      - Name of Res,Star Rating , cuisins, delivery time
 *   Footer
 *      -Copyright
 * - Links
 * -Address
 *   -Contact
 * 
 */  

   const Header=()=> {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo"
                 src="https://marketplace.canva.com/EAFaFUz4aKo/2/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-JmYWTjUsE-Q.jpg"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
   };

    

   const RestaurantCard=()=> {
    return (
        <div className="res-card" style={{
            backgroundColor:"#f0f0f0",
        }}>
            <img
             className="res-logo"
             alt="res-logo"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/7/2b1d78bb-5604-46db-99ba-02de93dc58a2_881203.jpg"/>
          <h3>Chinese Wok</h3>
          <h4>Biryani,North Indian,Asian</h4>
          <h4>38 minutes</h4>
        </div>
    )
   }

   const Body=() => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
            </div>
        </div>
    )
   }

const AppLayout=()=> {
    return (
        <div className="app">
           <Header/>
           <Body/>
        </div>
    )
}


const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);