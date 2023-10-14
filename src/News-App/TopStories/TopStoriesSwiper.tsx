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
import {
  TopStoriesDeResponse,
  TopStoriesEnResponse,
} from "../../fetch/TopStories/topStoriesTypes";
import { useSelector } from "react-redux";
import { RootState } from "../store";

interface TopStoriesSwiperProps {
  data: TopStoriesDeResponse[] | TopStoriesEnResponse[];
}

const TopStoriesSwiper: React.FC<TopStoriesSwiperProps> = ({ data }) => {
  const language = useSelector((state: RootState) => state.language.value);

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
        : data.map((article, index) => (
            <SwiperSlide key={index}>
              <Content data={article} language={language} />{" "}
              {/* Enclosed within {} */}
            </SwiperSlide>
          ))}
    </Swiper>
  );
};

export default TopStoriesSwiper;
