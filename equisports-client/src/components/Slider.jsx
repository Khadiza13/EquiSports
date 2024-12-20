import {
  A11y,
  Navigation,
  Pagination,
  Scrollbar,
  EffectCreative,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-creative";
import "../App.css";

const Slider = () => {
  return (
    <div className="mt-3 w-full">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectCreative]}
        spaceBetween={50}
        slidesPerView={1}
        effect="creative"
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className="relative flex justify-center items-center rounded-xl">
            <img
              className="w-full h-[500px] object-cover"
              style={{ objectPosition: "center" }}
              src="https://i.ibb.co/Jr22hTW/360-F-872873583-ODwhib-EITGq6-QW2u-Bmba-YUkf-Eriit-Ywv.jpg"
              alt="Skiing gear"
            />

            <div className="absolute top-1/3 w-full text-center text-white">
              <h2 className="text-5xl font-bold">Gear Up for Greatness</h2>
              <p className="text-lg mt-2">
                Discover the best sports equipment to elevate your performance.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative flex justify-center items-center rounded-xl">
            <img
              className="w-full h-[500px] object-cover"
              src="https://i.ibb.co/McmdS3f/2327-jpg-wh1200.jpg"
              alt="Skateboarding gear"
            />

            <div className="absolute top-1/3 w-full text-center text-red-950">
              <h2 className="text-5xl font-bold">Unleash Your Potential</h2>
              <p className="text-lg mt-2">
                From skateboards to accessories, find everything you need here.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative flex justify-center items-center rounded-xl">
            <img
              className="w-full h-[500px] object-cover"
              src="https://i.ibb.co/Zf7NHLr/pngtree-most-used-sports-equipment-in-new-hampshire-image-13169642.png"
              alt="Various sports equipment"
            />

            <div className="absolute top-1/3 w-full text-center text-red-950">
              <h2 className="text-5xl font-bold">
                Explore All Sports Categories
              </h2>
              <p className="text-lg mt-2">
                From football to snowboarding, find gear for all your favorite
                sports.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
