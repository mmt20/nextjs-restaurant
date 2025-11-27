import Rating from "@/common/Rating/Rating";
import { MdOutlineRateReview, MdRestaurant } from "react-icons/md";
import { RiMoneyDollarBoxLine } from "react-icons/ri";

const RestaurantOverview = () => {
  return (
    <section className="text-start" dir="ltr">
      <h5 className="pt-3">Bazoka</h5>
      <hr />

      <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-md-between">
        <div className="d-flex align-items-center me-md-5">
          <Rating />
          <div className="d-flex align-items-center ms-3">
            <MdOutlineRateReview className="review-icon" />
            <span className="ms-2">9 Reviews</span>
          </div>
        </div>

        <div className="d-flex align-items-center mt-3 mt-md-0">
          <div className="d-flex align-items-center me-4">
            <MdRestaurant className="review-icon" />
            <span className="ms-2">Egyptian Cuisine</span>
          </div>

          <div className="d-flex align-items-center">
            <RiMoneyDollarBoxLine className="review-icon" />
            <span className="ms-2">$100 to $200</span>
          </div>
        </div>
      </div>

      <hr />

      <div className="d-flex justify-content-start">
        <p>
          Bazoka Restaurant in Egypt offers a wide selection of Saudi dishes, grills, appetizers, salads, hot and cold
          drinks, desserts, pastries, soft drinks, fresh juices, and ice cream.
        </p>
      </div>
    </section>
  );
};

export default RestaurantOverview;
