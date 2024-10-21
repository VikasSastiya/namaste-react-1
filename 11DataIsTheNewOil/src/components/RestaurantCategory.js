// import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory=({data,showItems,setShowIndex,dummy})=> {

     const handleClick=()=>{
        setShowIndex();
     };
    // console.log(data);
    return (
          <div>
        {/* Header */}
        <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 flex justify-between">
          <div className="flex justify-between cursor-pointer"
           onClick={handleClick}>
         <span className="font-bold text-lg ">
            {data.title} ({data.itemCards.length})
            </span>
            </div>
           
        {showItems&&<ItemList items={data.itemCards} dummy={dummy}/>}   {/* this process of dummy is props drilling read from react doccumentation */}

        </div>
       
        {/* Accordian body */}
    </div>
    );
};

export default RestaurantCategory;