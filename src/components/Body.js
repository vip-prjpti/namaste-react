import RestoCard from "./RestaurantCard";
import resObj from "../../utils/mockData";
import { useState } from "react";
// import { useState, useEffect } from "react";
// import Shimmer from "./Shimmer";

const Body = () => {

// local state variable by react - insode the body fucntion scope
const [listOfRestaurants, setListOfRestaurants] = useState(resObj.restaurants);

  // let listOfRestaurants = resObj.restaurants;
  const filterRestaurant = () => {
    const filteredRestaurants = listOfRestaurants.filter((res) => res.info.avgRating > 4.2);

    setListOfRestaurants(filteredRestaurants);
    console.log(listOfRestaurants);
  }

  return (
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
