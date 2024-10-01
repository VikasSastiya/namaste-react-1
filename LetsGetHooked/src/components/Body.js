import RestaurantCard from "../components/RestaurantCard"
import {useState} from "react";
import resList from "../utils/mockData"


const Body=() => {
    
       // Local State Variable - Super powerful variable
      const [listOfRestaurants,setListOfRestaurant]=useState(resList);   // it works likenormal variable
    // above line statement is same as "const arr=useState(resList);   const [listOfRestaurants,setListOfRestaurant]=arr;"
         // it can also be written as "const arr=useState(resList);  const [listOfRestaurants,setListOfRestaurants]=arr; by the way this is normal javascript"
    //  let listOfRestaurants=[];
       // Normal JS Variable
        
// you can create a normal list like "const list=[];"
     // whenever state variable changes or updates react rerender my component
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" 
                onClick={()=>{
                  
                 const filteredList=listOfRestaurants.filter(
                     (res)=>res.info.avgRating>4.4
                  );
                  setListOfRestaurant(filteredList);
                }}>Top Rated Restaurant</button>
            </div>
            <div className="res-container">
             {
                    listOfRestaurants.map((restaurant,index)=>(
                    <RestaurantCard key={restaurant.info.id} resData={restaurant}/>

                    )
                    ) }

            </div>
        </div>
    )
   }

   export default Body;