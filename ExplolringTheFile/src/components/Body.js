import RestaurantCard from "../components/RestaurantCard"
import {useState,useEffect} from "react";


const Body=() => {
    
       // Local State Variable - Super powerful variable
      const [listOfRestaurants,setListOfRestaurant]=useState([]);   // it works likenormal variable
   
      useEffect(()=>{
        fetchData();  // 
      },[]);   // when the body function render,it render cycle completed useEffect function running
     
     const fetchData =async ()=> {    // for resolve promice 
        const data=await fetch(   //an error will be shown after running the code to resolve install cors extension remember install its google extension 
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );     // fetch data from swiggy API
       const json=await data.json();
       console.log(json);
    //    setListOfRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)   // instead of doing this we can write this like
    setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);  // this is optional chaining please read it
    };

       
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