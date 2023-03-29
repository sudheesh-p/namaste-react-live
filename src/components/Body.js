import RestaurantCard from "./RestaurantCard";
import { useEffect, useState,useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import {filterData} from '../utils/helper'
import useRestaurantList from "../utils/useRestaurantList";
import UserContext from "../utils/userContext";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const {allRestaurants,filteredRestaurants,setFilteredRestaurants} = useRestaurantList();
  const {user,setUser} = useContext(UserContext)
  
  return allRestaurants.length === 0? (<Shimmer/>) : (
    <>
      <div className=" p-5 my-2 bg-pink-50">
        <input className="focus:bg-green-200"
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="p-2 m-2 bg-purple-900 hover:bg-gray-500 text-white rounded-md"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
        <input type="text" value={user.name} onChange={
          e => setUser({
            name: e.target.value,
            email:"new@email.com"
          })
        }/>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link to={`/restaurant/${restaurant.data.id}`} key={restaurant.data.id}>
              <RestaurantCard {...restaurant.data}  />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
