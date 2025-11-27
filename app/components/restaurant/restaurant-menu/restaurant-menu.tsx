import styles from "./restaurant-menu.module.css";

const { menuItem, price, line } = styles;

const RestaurantMenu = () => {
  return (
    <main className={menuItem} dir="ltr">
      <div className="d-flex align-items-center justify-content-start w-100">
        <h4>Meat Meal</h4>
        <h5 className={price}>$50</h5>
      </div>
      <p>
        Meal description details. Meal description details. Meal description details. Meal description details. Meal
        description details. Meal description details.
      </p>
      <hr className={line} />
    </main>
  );
};

export default RestaurantMenu;
