import RestaurantCard from "./RestaurantCard";
// import resObj from "../../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/all/week?api_key=6bda6bdea972a286948df7bfc0549283&language=en-US"
    );

    const json = await data.json();

    console.log(json.results);
    // setListOfRestaurants(json.data.cards[2].data.data.cards);
    setListOfRestaurants(json.results);
  };

  

  if(listOfRestaurants.length === 0){
    return <Shimmer />
  }

  return (
    <div className="body">
      <div className="filter">
        Filter
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.restaurantPoint > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((obj) => (
          <RestaurantCard key={obj.id} resData={obj} />
        ))}
      </div>
    </div>
  );
};

export default Body;
