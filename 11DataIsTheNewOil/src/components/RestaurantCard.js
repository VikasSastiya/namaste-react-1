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
        aggregatedDiscountInfoV3
           }=props;
   
    const Discount=resData?.info?.aggregatedDiscountInfoV3||aggregatedDiscountInfoV3;
    const name = resData?.info?.name || resName;
    const cuisineList = resData?.info?.cuisines || cuisines;
    const rating = resData?.info?.avgRating || avgRating;
    const cost = resData?.info?.costForTwo || costForTwo;
    const deliveryTime = resData?.info?.slaString || slaString;
    const cloudinaryImageId = resData?.info?.cloudinaryImageId;

    return (  // you can also write this like w-[200px] instead of w-0 
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100  hover:bg-gray-200 relative">  
            <img
                className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500"
                alt="res-logo"
                src={CDN_URL+cloudinaryImageId}   // we are using javascript here so we put the image id in curlybraces
            />
            <h3 className="font-bold py-4 text-lg">{name}</h3>   
            <h4>{Array.isArray(cuisineList) ? cuisineList.join(", ") : cuisineList}</h4>    
            <h4>{rating} stars</h4>
            <h4>{cost} for two</h4>
            <h4>{deliveryTime}</h4>
             {/* Render specific parts of the Discount object */}
             {Discount && (
                <div className="flex  text-white absolute inset-x-0 space-x-2 top-60">
                    <h4>{Discount.header}</h4>
                    <h5>{Discount.subHeader}</h5>
                    <span>{Discount.discountTag}</span>
                </div>
            )}
        </div>
    );
   };

     // Higher Order Component

     // import - RestaurantCard =>> RestaurantCardPromoted

   // if tailwind not givinng suggestions 

   export default RestaurantCard;