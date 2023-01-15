import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../Constants";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((item) =>
    item?.data?.name?.toLowercase()?.includes(searchText.toLowercase())
  );
  return filterData;
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const[allRestaurants,setAllRestaurants] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurantList);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards)
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  return allRestaurants.length === 0? (<Shimmer/>) : (
    <>
      <div>
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
