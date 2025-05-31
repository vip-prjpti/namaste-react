const RestaurantCard = (props) => {
    const { resData } = props;
  

    const base_URL = "https://image.tmdb.org/t/p/original/";
    // const { name, adress, restaurantPoint, status, minimumPrice } = resData;
    const { title, adress, vote_average, status, minimumPrice } = resData;
    return (
      <div className="res-card">
        <img
          className="res-logo"
          src={`${base_URL}${
                resData.poster_path
              }`}
          alt="monster "
        />
        <h3>{title}</h3>
        <h4>{adress}</h4>
        <h4>{vote_average} </h4>
        <h4>{status} </h4>
        <h4>{minimumPrice} </h4>
      </div>
    );
  };

  
  export default RestaurantCard;