import RestoCard from "./RestaurantCard";
// import resObj from "../../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
// import Shimmer from "./Shimmer";

const Body = () => {

  // local state variable by react - insode the body fucntion scope
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  // let listOfRestaurants = resObj.restaurants;
  const filterRestaurant = () => {
    const filteredRestaurants = listOfRestaurants.filter((res) => res.info.avgRating > 4.2);
    setListOfRestaurants(filteredRestaurants);
    console.log(listOfRestaurants);
  }

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=12.9628669&lng=77.57750899999999&carousel=true&third_party_vendor=1")
    const json = await data.json();

    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    console.log(json);
    // console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
  }

  // Conditional Rendering
  // if(listOfRestaurants.length === 0){
  //   return <Shimmer></Shimmer>
  // }

  // Ternary Operator
  return listOfRestaurants.length === 0 ? (
    <Shimmer></Shimmer>) : (
    <>
      <div className="filter">
        <button className="filter-btn" onClick={() => { filterRestaurant() }}>Filter Restaurants</button>
      </div>
      <div className="swiggy-restaurants">
        <div className="card">

          {listOfRestaurants.map((restaurant) => <RestoCard key={restaurant.info.id} resData={restaurant} />)}
        </div>
      </div>
    </>
  );
};

export default Body;
