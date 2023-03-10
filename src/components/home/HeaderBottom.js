import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const HeaderBottom = () => {
  return (
    <div className="">
      <div className="max-w-1180px">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          loop={true}
          loopAdditionalSlides={1}
        >
          <SwiperSlide>
            <img 
              src="photo/banner7.jpg"
              className="w-full "
              alt="제품사진"
            ></img>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="photo/banner8.jpg"
              className="w-full"
              alt="제품사진"
            ></img>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="photo/banner9.jpg"
              className="w-full"
              alt="제품사진"
            ></img>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="photo/banner10.jpg"
              className="w-full"
              alt="제품사진"
            ></img>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HeaderBottom;
