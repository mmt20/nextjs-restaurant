import RestrantCard from "./restaurant-card/restaurant-card";

const CardList = () => {
  return (
    <div className="container d-flex flex-wrap justify-content-between mt-3 ">
      <div className="row mb-3">
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 ">
          <RestrantCard />
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 ">
          <RestrantCard />
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 ">
          <RestrantCard />
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 ">
          <RestrantCard />
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 ">
          <RestrantCard />
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 ">
          <RestrantCard />
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 ">
          <RestrantCard />
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 ">
          <RestrantCard />
        </div>
      </div>
    </div>
  );
};

export default CardList;
