import { Swiper, SwiperSlide } from "swiper/react";
import EffectCarousel from "./effect-carousel.esm.js";
import "./effect-carousel.scss";
import "./main.scss";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/autoplay";
import "swiper/scss/pagination";
import "swiper/scss/virtual";
import Content from "./Content";

const TopStoriesSwiper = ({ data }) => {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination, EffectCarousel]}
      effect="carousel"
      grabCursor={true}
      loop={true}
      slidesPerView={"auto"}
      navigation={{
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      }}
      pagination={{
        el: ".swiper-pagination",
      }}
      autoplay={{
        delay: 6000,
        disableOnInteraction: false,
      }}
    >
      {!data.length
        ? null
        : data.map(
            (
              article,
              index, // Added the index parameter
            ) => (
              <SwiperSlide key={index}>
                {" "}
                {/* Added a key prop */}
                <Content data={article} />
              </SwiperSlide>
            ),
          )}
    </Swiper>
  );
};
export default TopStoriesSwiper;
