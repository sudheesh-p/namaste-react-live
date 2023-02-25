const RestaurantCard = ({cloudinaryImageId,name,cuisines,totalRatingsString}) => {
  return (
    <div className="w-56 p-2 m-2 shadow-md bg-pink-50">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
        alt="Burger King"
      />
      <h2 className="font-bold 2xl">{name}</h2>
      <h3>{cuisines.join(" , ")}</h3>
      <h4>{totalRatingsString}</h4>
    </div>
  );
};

export default RestaurantCard;
