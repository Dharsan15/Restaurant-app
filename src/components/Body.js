import { useState } from "react";
import { restaurantList } from "../../utils/constants";

import CardLayout from "./CardLayout";


const Body = () => {
   
  const[resList , setrestaurantList] = useState(restaurantList)

  return (
  <>
    <button
      onClick={() => {
         const newArr = resList.filter((res) => res.data.avgRating >= 4.2);
        setrestaurantList(newArr)
      }}
    >
      Top rated restaurants
    </button>

    <div className="restro-list">
      {resList.map((restaurant) => {
        return <CardLayout {...restaurant.data} />;
      })}
    </div>
  </>
  )
};

export default Body;
