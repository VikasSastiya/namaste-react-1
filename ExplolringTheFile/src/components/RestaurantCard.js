import {CDN_URL} from "../utils/constants";   // this is the way we import named url
// for default url we use "import CDN_URL from "../../utils/constants";"

const RestaurantCard=(props)=> {
    const { 
        resData, 
        resName, 
        cuisines, 
        avgRating, 
        costForTwo, 
        slaString,
           }=props;
   

    const name = resData?.info?.name || resName;
    const cuisineList = resData?.info?.cuisines || cuisines;
    const rating = resData?.info?.avgRating || avgRating;
    const cost = resData?.info?.costForTwo || costForTwo;
    const deliveryTime = resData?.info?.slaString || slaString;
    const cloudinaryImageId = resData?.info?.cloudinaryImageId;

    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img
                className="res-logo"
                alt="res-logo"
                src={CDN_URL+cloudinaryImageId}   // we are using javascript here so we put the image id in curlybraces
            />
            <h3>{name}</h3>   
            <h4>{Array.isArray(cuisineList) ? cuisineList.join(", ") : cuisineList}</h4>    
            <h4>{rating}</h4>
            <h4>₹{cost} for two</h4>
            <h4>{deliveryTime}</h4>
        </div>
    );
   };

   export default RestaurantCard;