import { restaurantList } from "../../utils/constants";

import CardLayout from "./CardLayout";

const Body = () => (
    <div className="restro-list">
      {restaurantList.map((restaurant) => {
        return <CardLayout {...restaurant.data} />;
      })}
    </div>
  );

  export default Body;