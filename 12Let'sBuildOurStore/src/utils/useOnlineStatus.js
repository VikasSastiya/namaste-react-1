// just search online event listener

import { useEffect,useState } from "react";


 const useOnlineStatus=()=>{

       const [onlineStatus,setOnlineStatus]=useState(true);  // onlineStatus gives a track of of if internet working true , if not false
     
      // check if online
             
         useEffect(()=>{
                
        window.addEventListener("offline",()=>{
            setOnlineStatus(false);
        });

         window.addEventListener("online",()=>{
               setOnlineStatus(true);
         });

         },[]);

      // boolean value


      return onlineStatus;

};

export default useOnlineStatus;