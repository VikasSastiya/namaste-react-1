  import { useState,useEffect } from "react";
import { Menu_API } from "../utils/constants";


 export const useRestaurantMenu=(resId)=>{
     // fetchdata
   
      const [resInfo,setResInfo]=useState(null);

       useEffect(()=>{
        fetchData();
       },[]);
       
       const fetchData=async()=>{
          const data=await fetch(Menu_API+resId);

          const json=await data.json();

           setResInfo(json.data);
       };

    return resInfo;
}
