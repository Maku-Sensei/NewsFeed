import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import { Navigation } from "swiper/modules"; // Import Swiper modules
import { IonButton, IonIcon } from "@ionic/react";
import { arrowBack, arrowForward } from "ionicons/icons";
import { useDispatch, useSelector } from "react-redux";
import { setTopic } from "./Slice/topicSlice";
import { setPage } from "./Slice/pageSlice";

const MySwiper = ({ page }) => {
  const dispatch = useDispatch();
  const currentTopic = useSelector((state) => state.topic.value);
  const topics = ["Anime", "Books", "Drama", "Movies", "Shows"];
  const currentSlide = topics.indexOf(currentTopic);

  // Event handler to update the current category when sliding
  const handleSlideChange = (swiper) => {
    const currentSlideIndex = swiper.activeIndex;
    dispatch(setTopic(topics[currentSlideIndex]));
    dispatch(setPage(1));
  };

  return (
    <div className="w-48">
      <Swiper
        modules={[Navigation]}
        slidesPerView={3}
        grabCursor={true}
        centeredSlides={true}
        initialSlide={currentSlide}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        onSlideChangeTransitionEnd={handleSlideChange}
        onInit={() => {
          dispatch(setTopic(currentTopic));
          dispatch(setPage(page));
        }}
      >
        <SwiperSlide>Anime</SwiperSlide>
        <SwiperSlide>Books</SwiperSlide>
        <SwiperSlide>Drama</SwiperSlide>
        <SwiperSlide>Movies</SwiperSlide>
        <SwiperSlide>TVShows</SwiperSlide>
      </Swiper>
      <div className="flex justify-evenly">
        <div className="swiper-button-prev">
          <IonButton fill="clear">
            <IonIcon icon={arrowBack} />
          </IonButton>
        </div>
        <p className=" mt-1 text-center text-xs">
          <span className="rounded-lg bg-blue-200 p-1"> {page} </span>
        </p>
        <div className="swiper-button-next">
          <IonButton fill="clear">
            <IonIcon icon={arrowForward} />
          </IonButton>
        </div>
      </div>
    </div>
  );
};

export default MySwiper;
