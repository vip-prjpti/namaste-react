import RestaurantCard ,{withPromotedLabel} from "./RestaurantCard";
// import resObj from "../../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router"
import {useOnlineStatus} from '../../utils/useOnlineStatus';


const Body = () => {

  // local state variable by react - insode the body fucntion scope
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  // let listOfRestaurants = resObj.restaurants;
  const filterRestaurant = () => {
    const filteredRestaurants = listOfRestaurants.filter((res) => res.info.avgRating > 4.0);
    setListOfRestaurants(filteredRestaurants);
    console.log(listOfRestaurants);
  }

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=12.9628669&lng=77.57750899999999&carousel=true&third_party_vendor=1")
    const json = await data.json();

    setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    console.log(json?.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants);
    // console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
  }

  // Conditional Rendering
  // if(listOfRestaurants.length === 0){
  //   return <Shimmer></Shimmer>
  // }

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>Check your connection! Looks like you are offline</h1>
    )
  }

  const searchRestaurant = () => {
    const filteredRestaurant = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
    console.log(filteredRestaurant);

    setFilteredRestaurant(filteredRestaurant);
  }

  // Ternary Operator
  return listOfRestaurants.length === 0 ? (
    <Shimmer></Shimmer>) : (
    <>
      <div className="filter flex items-center">
        <div className="search m-4 p-4 ">
          <input type="text" className="border border-solid border-black" name="" id="" value={searchText} onChange={(e) => { setSearchText(e.target.value) }} />
          <button className="px-4 py-2 bg-green-200 rounded-lg" onClick={() => {
            searchRestaurant()
          }}>Search</button>
        </div>
        <button className="filter-btn bg-gray-200 p-4 rounded-lg" onClick={() => { filterRestaurant() }}>Filter Restaurants</button>
      </div>
      <div className="swiggy-restaurants">
        <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1">

          {filteredRestaurant.map((restaurant) =>
          (<Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
            <RestaurantCard resData={restaurant} />
          </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
