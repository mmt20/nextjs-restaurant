import stylee from "./restaurant-header.module.css";
const { heroContainer, heroTitle, heroDescription } = stylee;
const RestaurantHeader = () => {
  return (
    <div className="d-flex flex-column text-center">
      <div className={`${heroContainer} flex-column`}>
        <h1 className={`${heroTitle}`}>Bazoka Cairo Restaurant</h1>
        <p className={`${heroDescription}`}>
          Welcome to Bazoka Cairo! Enjoy our delicious fried chicken and sides in a cozy atmosphere
        </p>
      </div>
    </div>
  );
};

export default RestaurantHeader;
