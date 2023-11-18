import { useState } from "react";
import { restaurantList } from "../../utils/constants";

import CardLayout from "./CardLayout";


const Body = () => (
  <>
    <button
      onClick={() => {
        //  const newArr = restaurantList.filter((res) => res.data.avgRating >= 4.2);
        // setrestaurantList(newArr)
      }}
    >
      Top rated restaurants
    </button>

    <div className="restro-list">
      {restaurantList.map((restaurant) => {
        return <CardLayout {...restaurant.data} />;
      })}
    </div>
  </>
);

export default Body;
