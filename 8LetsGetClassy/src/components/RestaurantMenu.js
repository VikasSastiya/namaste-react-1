import {useState,useEffect} from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { Menu_API } from "../utils/constants";


const RestaurantMenu=()=>{

    const[resInfo,setResInfo]=useState(null);

     const {resId}=useParams();
    //  console.log(params);

      useEffect(()=>{
        fetchMenu();
      },[]);   // this is empty dependency array that mean it will call at once at it render

      const fetchMenu=async()=> {
        const data=await fetch(Menu_API+resId);     //"&catalog_qa=undefined&submitAction=ENTER" is an optional parameter so you can avoid it   

   const json=await data.json();

    // console.log(json);
    setResInfo(json.data);
      };

    //   if(resInfo==null) return <Shimmer/>;
  //  or you can write above code like below code

    const {name,costForTwo,cuisines}=resInfo?.cards[2]?.card?.card?.info||[];
    const itemCards=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card?.itemCards||[];
    
    // console.log(itemCards);

      

    return resInfo==null?(
        <Shimmer/>
    ):(
        <div className="menu">
      
{/* this is one way to make the code more proper is hown in upper code */}
        <h2>{name}</h2>
        <p>{cuisines} - Rs {costForTwo/100} for two</p>
        <h2>Menu</h2>
       {/* <h2>{description.join(", ")-{defaultPrice}}</h2> */}
       {/* <h3>cost {defaultPrice/100}</h3> */}
      

       <ul>
        {itemCards.map((item)=>(
          <li key={item.card.info.id}>{item.card.info.name} - {item.card.info.defaultPrice/100}</li>
        ))}
       </ul>
        </div>
    );
};

export default RestaurantMenu;