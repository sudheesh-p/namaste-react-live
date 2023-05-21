import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../Constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurant = useRestaurant(resId);
  console.log(restaurant)
  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addItem('Grapes'))
  }

  return !restaurant ? (
    // <Shimmer />
    <div>
        <button className="p-2 m-5 bg-green-100"
          onClick={() => handleAddItem()} data-testid='add-btn'
        >Add Item</button>
      </div>
  ) : (
    <div className="menu">
      <div>
        <h1>Restraunt id: {resId}</h1>
        <h2>{restaurant?.name}</h2>
        <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
        <h3>{restaurant?.area}</h3>
        <h3>{restaurant?.city}</h3>
        <h3>{restaurant?.avgRating} stars</h3>
        <h3>{restaurant?.costForTwoMsg}</h3>
      </div>
      
      <div>
        <h1>Menu</h1>
        <ul data-testid="menu">
          {Object?.values(restaurant?.menu?.items).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
