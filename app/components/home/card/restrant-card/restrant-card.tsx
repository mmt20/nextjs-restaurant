import Image from "next/image";
import Link from "next/link";
import styles from "./restrant-card.module.css";
import Rating from "@/common/Rating/Rating";

const { cardContainer, rate } = styles;

const RestrantCard = () => {
  return (
    <div className={`card ${cardContainer} mb-3`}>
      <Image
        className="card-img-top mt-2 object-fit-contain"
        src="https://1000logos.net/wp-content/uploads/2023/04/Starbucks-logo.png"
        alt="Restaurant Image"
        width={200}
        height={200}
      />
      <div className="card-body">
        <h5 className="card-title text-center">Restaurant Name</h5>
        <div className="d-flex justify-content-center">
          <div className="d-flex justify-content-center">
            <Rating />
            <p className={`mx-1 mt-1 ${rate}`}>4 Ratings</p>
          </div>
          <div className="d-flex mt-1 ms-3">
            {/* <BiSolidCity className="rate me-1" /> */}
            <p className="rate">Cairo</p>
          </div>
        </div>
        <h6 className="text-center">Booked for 3 days</h6>
      </div>
    </div>
  );
};

export default RestrantCard;
