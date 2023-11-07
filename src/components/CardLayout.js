const CardLayout = ({
    cloudinaryImageId,
    name,
    cuisines,
    area,
    avgRating,
    costFortwoString,
  }) => (
    <div className="restro-card">
      <div>
        <img
          className="food-image"
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
            cloudinaryImageId
          }
        />
      </div>
      <div className="card-contents">
        <h3>{name}</h3>
        <p>{cuisines.join(",")}</p>
        <div className="card-footer">
        <p> ⭐ {avgRating} </p>
          <p> {area} </p>
        </div>
      </div>
    </div>
  );


  export default CardLayout;
  