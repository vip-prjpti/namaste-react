import { CDN_URL } from "../../utils/constants"


const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } = resData?.info
  return (

    <div>
      <div className="m-4 p-4 w-[200px] bg-gray-100 hover:bg-gray-200 rounded-lg">

        <img src={CDN_URL + cloudinaryImageId} alt="" />
        <h3>{name}</h3>
        <h3>{cuisines.join(", ")}</h3>
        <h3>{avgRating}</h3>
        <h3>{sla.deliveryTime} minutes</h3>
        <h3>{costForTwo}</h3>

      </div>
    </div>
  );
}


export default RestaurantCard;