import RestaurantCard from "../components/RestaurantCard"
import resData from "../utils/mockData";



const Body=() => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
             {
                    resData.map((restaurant,index)=>(
                    <RestaurantCard key={restaurant.info.id} resData={restaurant}/>

                    )) }

            </div>
        </div>
    )
   }

   export default Body;