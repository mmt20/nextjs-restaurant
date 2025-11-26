import BookDate from "@/components/restaurant/book-date/book-date";
import RestaurantDeatils from "@/components/restaurant/restaurant-details/restaurant-details";
import RestaurantHeader from "@/components/restaurant/restaurant-header/restaurant-header";

const RestaurantPage = () => {
  return (
    <div className="text-danger my-4">
      {/* Hero Part */}
      <RestaurantHeader />
      <div className="container d-flex justify-content-sm-between mt-4 gap-5 flex-column flex-sm-row flex-column-reverse align-items-center align-align-items-lg-start">
        <RestaurantDeatils />
        <BookDate />
      </div>
    </div>
  );
};

export default RestaurantPage;
