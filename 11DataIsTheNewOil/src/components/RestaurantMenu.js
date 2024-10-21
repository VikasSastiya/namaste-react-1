import {useState,useEffect} from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
// import { Menu_API } from "../utils/constants";
import {useRestaurantMenu} from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";


const RestaurantMenu=()=>{

    // const[resInfo,setResInfo]=useState(null);

     const {resId}=useParams();
    //  console.log(params);

      const dummy="Dummy Data";

       const resInfo=useRestaurantMenu(resId);

       const [ShowIndex,setShowIndex]=useState(0);
  //     useEffect(()=>{
  //       fetchMenu();
  //     },[]);   // this is empty dependency array that mean it will call at once at it render

  //     const fetchMenu=async()=> {
  //       const data=await fetch(Menu_API+resId);     //"&catalog_qa=undefined&submitAction=ENTER" is an optional parameter so you can avoid it   

  //  const json=await data.json();

  //   // console.log(json);
  //   setResInfo(json.data);
  //     };

    //   if(resInfo==null) return <Shimmer/>;
  //  or you can write above code like below code

    const {name,costForTwo,cuisines}=resInfo?.cards[2]?.card?.card?.info||[];
    const itemCards=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card?.itemCards||[];
    // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    // console.log(itemCards);

      const categories=
      resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(   // this is an accordian just search the code you will get that
        (c)=>
          c.card?.card?.["@type"]==                      
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
      // console.log(categories);

    return resInfo==null?(
        <Shimmer/>
    ):(
        <div className="text-center ">
      
{/* this is one way to make the code more proper is hown in upper code */}
        <h2 className="font-bold my-6 text-2xl">{name}</h2>
        <p className="font-bold text-lg">{cuisines} - Rs {costForTwo/100} for two</p>
        {/* <h2>Menu</h2> */}
       {/* <h2>{description.join(", ")-{defaultPrice}}</h2> */}
       {/* <h3>cost {defaultPrice/100}</h3> */}
       {/* Categories accordians- just search it you will get the meaning */}
               {categories.map((category,index)=> (
                // here parent
                <RestaurantCategory
                 key={category?.card?.card.title} 
                 data={category?.card?.card}
                 showItems={index==ShowIndex?true:false}
                 setShowIndex={()=>setShowIndex(index)}
                 dummy={dummy}
                 />
               ))}
       {/* <ul>
        {itemCards.map((item)=>(
          <li key={item.card.info.id}>{item.card.info.name} - {item.card.info.defaultPrice/100}</li>
        ))}
       </ul> */}
        </div>
    );
};

export default RestaurantMenu;