import { useEffect, useState } from "react";
import { FETCH_RES_LIST } from "../Constants";

const useRestaurantList = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(FETCH_RES_LIST);
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }
  return { allRestaurants, filteredRestaurants, setFilteredRestaurants };
};

export default useRestaurantList;
