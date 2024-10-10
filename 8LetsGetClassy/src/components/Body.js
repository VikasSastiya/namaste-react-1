import RestaurantCard from "../components/RestautantCard"
import {useState,useEffect} from "react";
import Shimmer from "../components/Shimmer";
import { Link } from "react-router-dom";


// const [searchText,setSearchText]=useState(""); we cannot declare hook code outside the function,it throw an error

const Body=() => {
  // always 7
    
       // Local State Variable - Super powerful variable
      const [listOfRestaurants,setListOfRestaurant]=useState([]);   // it works likenormal variable
      const [filteredRestaurant,setFilteredRestaurant]=useState([]);   // initially filtered restaurant is empty so we not seen any restaurent on screen
      const [searchText,setSearchText]=useState("");

      // if() {
      //     const [searchText,setSearchText]=useState("");   // don't use useState hooks inside if/else condition,for loops and also in functions
      // }   // the useState hooks are ment to be created inside the functional component at heigher level

//  Whenever state variables update, react triggers a reconciliation cycle(re-renders the component) 
      console.log("Body Rendered");

      useEffect(()=>{
        fetchData();  // 
      },[]);   // when the body function render,it render cycle completed useEffect function running
     
     const fetchData =async ()=> {    // for resolve promice 
        const data=await fetch(   //an error will be shown after running the code to resolve install cors extension remember install its google extension 
           "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING" // the API will work only when cors plugin extension is installed in your system but if you doesn't want cors proxy extension then change the code shown below
          // "https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
          );     // fetch data from swiggy API
       const json=await data.json();
    //    console.log(json);
    //    setListOfRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)   // instead of doing this we can write this like
    setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);  // this is optional chaining please read it
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);    // initially filtered restaurant is empty so we not seen any restaurent on screen
  };
  
    // now if we refresh the page , the header page is shown but to show loading screen when the page is loading ,code stated below
       
    // if(listOfRestaurants.length==0) {   // this is also known as Conditional rendering
    //     // return <h1>loading . . . </h1>;  // if API takes some time to load ,load shimmer UI
    //      return <Shimmer/>;
    // }
      // above line statement is same as "const arr=useState(resList);   const [listOfRestaurants,setListOfRestaurant]=arr;"
         // it can also be written as "const arr=useState(resList);  const [listOfRestaurants,setListOfRestaurants]=arr; by the way this is normal javascript"
    //  let listOfRestaurants=[];
       // Normal JS Variable
        
// you can create a normal list like "const list=[];"
     // whenever state variable changes or updates react rerender my component
 
    //  we can also write shimmer ifelse code like below
    
    // whenever you
     return listOfRestaurants.length==0 ?(<Shimmer/>): (
        <div className="body">
            <div className="filter">
              <div className="search">
                <input
                 type="text"
                  className="search-box"
                 value={searchText}
                   onChange={(e)=>{
                    setSearchText(e.target.value);
                   }}
                 />
                <button 
                onClick={()=>{
                  // Filter the restaurant cards and update the UI
                  // searchText
                  // to track the value of these input box whatever user typing in we have to bindthat value to input box
               
                  
                  console.log(searchText);

                  const filteredRestaurant=listOfRestaurants.filter(
                    // (res)=> res.info.name.includes(searchText)     /// we use it includes for getting approx value of search result
                   // here the uppersyntex if we use search is case-sensitive to avoide so we can writeit as
                   (res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase())  
                  //  now the error we seen in search button is we search name of restaurent it sort the restaurants other and remaining restaurent would not seen,so we never search again in restaurent without refreshing the page  ,so to avoid this we use filteredRestaurent useState hook                   
                  );

                // setListOfRestaurant(filteredRestaurant); to avoid the search error we use below code
                setFilteredRestaurant(filteredRestaurant);

                }}>search</button>
              </div>
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
                    filteredRestaurant.map((restaurant,index)=>(
                    <Link key={restaurant.info.id}
                     to={"/restaurants/"+restaurant.info.id}
                     >
                      <RestaurantCard resData={restaurant}/>
                       </Link>
                    )
                    ) }

            </div>
        </div>
    )
   }

   export default Body;