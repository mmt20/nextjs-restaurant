import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

import "./restaurant-slider.module.css";
import Image from "next/image";
const imgUrls = [
  "https://picsum.photos/400",
  "https://picsum.photos/401",
  "https://picsum.photos/402",
  "https://picsum.photos/403",
  "https://picsum.photos/404",
  "https://picsum.photos/405",
  "https://picsum.photos/406",
  "https://picsum.photos/407",
  "https://picsum.photos/408",
  "https://picsum.photos/409",
  "https://picsum.photos/410",
  "https://picsum.photos/411",
  "https://picsum.photos/412",
  "https://picsum.photos/413",
];
const RestaurantSlider = () => {
  return (
    <>
      <Swiper
        className="mySwiper"
        navigation={true}
        pagination={{ clickable: true }}
        slidesPerView={2}
        spaceBetween={20}
        modules={[Navigation, Pagination]}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {imgUrls.map((url, index) => (
          <SwiperSlide key={index}>
            <Image
              src={url}
              alt={`Restaurant Image ${index + 1}`}
              width={400}
              height={400}
              style={{ width: "100%", height: "auto" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default RestaurantSlider;
