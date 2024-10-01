import RestaurantCard from "../components/RestaurantCard"
import resData from "../utils/mockData";



const Body=() => {
    // at below line note down not to use const variable use let variable
 
        // const "listOfRestaurants=[" we not write this we use  "let listOfRestaurants=["
   
       // State Variable - Super powerful variable

       // Normal JS Variable
        let listOfRestaurants=[
          {  
        info: {
  id: "103357",
  name: "Gurukripa Southtukoganj (Dutt)",
  cloudinaryImageId: "wbhvshhcwdzvrvuxfpsq",
  locality: "South Tukoganj",
  areaName: "South Tukoganj",
  costForTwo: 250,
  cuisines: [
      "South Indian",
      "Chinese",
      "Snacks",
      "Thalis",
      "Desserts",
      "Punjabi",
      "Beverages",
      "Indian",
      "Jain"
  ],
  avgRating: 4.4,
  veg: true,
  parentId: "92206",
  avgRatingString: "4.4",
  totalRatingsString: "67K+",
  sla: {
      deliveryTime: 24,
      lastMileTravel: 2.3,
      serviceability: "SERVICEABLE",
      slaString: "20-25 mins",
      lastMileTravelString: "2.3 km",
      iconType: "ICON_TYPE_EMPTY"
  },
  availability: {
      nextCloseTime: "2024-09-30 23:59:00",
      opened: true
  },
  badges: {
      imageBadges: [
          {
              imageId: "Green%20Dot%20Awards/Best%20In%20Paneer.png",
              description: "Delivery!"
          },
          {
              imageId: "Rxawards/_CATEGORY-North%20Indian.png",
              description: "Delivery!"
          },
          {
              imageId: "v1695133679/badges/Pure_Veg111.png",
              description: "pureveg"
          }
      ]
  },
  isOpen: true,
  type: "F",
  badgesV2: {
      entityBadges: {
          imageBased: {
              badgeObject: [
                  {
                      attributes: {
                          description: "Delivery!",
                          imageId: "Green%20Dot%20Awards/Best%20In%20Paneer.png"
                      }
                  },
                  {
                      attributes: {
                          description: "Delivery!",
                          imageId: "Rxawards/_CATEGORY-North%20Indian.png"
                      }
                  },
                  {
                      attributes: {
                          description: "pureveg",
                          imageId: "v1695133679/badges/Pure_Veg111.png"
                      }
                  }
              ]
          },
          textBased: {},
          textExtendedBadges: {}
      }
  },
  aggregatedDiscountInfoV3: {
      header: "50% OFF",
      subHeader: "UPTO ₹100"
  },
  orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {}
  },
  differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {}
      }
  },
  reviewsSummary: {},
  displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  restaurantOfferPresentationInfo: {},
  externalRatings: {
      aggregatedRating: {
          rating: "4.1",
          ratingCount: "13K+"
      },
      source: "GOOGLE",
      sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
  },
  ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
analytics: {},
cta: {
  link: "https://www.swiggy.com/city/indore/gurukripa-southtukoganj-dutt-south-tukoganj-rest103357",
  text: "RESTAURANT_MENU",
  type: "WEBLINK"
},
widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
info: {
  id: "69420",
  name: "Vijay Chaat House",
  cloudinaryImageId: "mstgatb2vu8v48kcua81",
  locality: "Nihalpura",
  areaName: "Rajwada",
  costForTwo:150,
  cuisines: [
      "Snacks",
      "Sweets",
      "Chaat",
      "Street Food"
  ],
  avgRating: 3.5,
  veg: true,
  parentId: "223165",
  avgRatingString: "4.6",
  totalRatingsString: "4.6K+",
  sla: {
      deliveryTime: 14,
      lastMileTravel: 0.4,
      serviceability: "SERVICEABLE",
      slaString: "10-15 mins",
      lastMileTravelString: "0.4 km",
      iconType: "ICON_TYPE_EMPTY"
  },
  availability: {
      nextCloseTime: "2024-09-30 20:30:00",
      opened: true
  },
  badges: {
      imageBadges: [
          {
              imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Samosa-Kachori.png",
              description: "Delivery!"
          },
          {
              imageId: "Rxawards/_CATEGORY-Poa%20Kachori.png",
              description: "Delivery!"
          },
          {
              imageId: "v1695133679/badges/Pure_Veg111.png",
              description: "pureveg"
          }
      ]
  },
  isOpen: true,
  type: "F",
  badgesV2: {
      entityBadges: {
          imageBased: {
              badgeObject: [
                  {
                      attributes: {
                          description: "Delivery!",
                          imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Samosa-Kachori.png"
                      }
                  },
                  {
                      attributes: {
                          description: "Delivery!",
                          imageId: "Rxawards/_CATEGORY-Poa%20Kachori.png"
                      }
                  },
                  {
                      attributes: {
                          description: "pureveg",
                          imageId: "v1695133679/badges/Pure_Veg111.png"
                      }
                  }
              ]
          },
          textBased: {},
          textExtendedBadges: {}
      }
  },
  aggregatedDiscountInfoV3: {
      header: "15% OFF",
      subHeader: "UPTO ₹45"
  },
  orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {}
  },
  differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {}
      }
  },
  reviewsSummary: {},
  displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  restaurantOfferPresentationInfo: {},
  externalRatings: {
      aggregatedRating: {
          rating: "--"
      }
  },
  ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
analytics: {},
cta: {
  link: "https://www.swiggy.com/city/indore/vijay-chaat-house-nihalpura-rajwada-rest69420",
  text: "RESTAURANT_MENU",
  type: "WEBLINK"
},
widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
    info: {
      id: "6942",
      name: "Vijay Chaat House",
      cloudinaryImageId: "mstgatb2vu8v48kcua81",
      locality: "Nihalpura",
      areaName: "Rajwada",
      costForTwo:150,
      cuisines: [
          "Snacks",
          "Sweets",
          "Chaat",
          "Street Food"
      ],
      avgRating: 4.1,
      veg: true,
      parentId: "223165",
      avgRatingString: "4.6",
      totalRatingsString: "4.6K+",
      sla: {
          deliveryTime: 14,
          lastMileTravel: 0.4,
          serviceability: "SERVICEABLE",
          slaString: "10-15 mins",
          lastMileTravelString: "0.4 km",
          iconType: "ICON_TYPE_EMPTY"
      },
      availability: {
          nextCloseTime: "2024-09-30 20:30:00",
          opened: true
      },
      badges: {
          imageBadges: [
              {
                  imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Samosa-Kachori.png",
                  description: "Delivery!"
              },
              {
                  imageId: "Rxawards/_CATEGORY-Poa%20Kachori.png",
                  description: "Delivery!"
              },
              {
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                  description: "pureveg"
              }
          ]
      },
      isOpen: true,
      type: "F",
      badgesV2: {
          entityBadges: {
              imageBased: {
                  badgeObject: [
                      {
                          attributes: {
                              description: "Delivery!",
                              imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Samosa-Kachori.png"
                          }
                      },
                      {
                          attributes: {
                              description: "Delivery!",
                              imageId: "Rxawards/_CATEGORY-Poa%20Kachori.png"
                          }
                      },
                      {
                          attributes: {
                              description: "pureveg",
                              imageId: "v1695133679/badges/Pure_Veg111.png"
                          }
                      }
                  ]
              },
              textBased: {},
              textExtendedBadges: {}
          }
      },
      aggregatedDiscountInfoV3: {
          header: "15% OFF",
          subHeader: "UPTO ₹45"
      },
      orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {}
      },
      differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {}
          }
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
          aggregatedRating: {
              rating: "--"
          }
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/city/indore/vijay-chaat-house-nihalpura-rajwada-rest69420",
      text: "RESTAURANT_MENU",
      type: "WEBLINK"
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    }
];


    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" 
                onClick={()=>{
                  // Filter logic here
                  listOfRestaurants=listOfRestaurants.filter(
                     (res)=>res.info.avgRating>4
                  );
                  console.log(listOfRestaurants);
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