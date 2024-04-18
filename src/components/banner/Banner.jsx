import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import banner1 from '../../assets/banner1.jpg';
import banner2 from '../../assets/banner2.jpg';
import banner3 from '../../assets/banner3.jpg';
import banner5 from '../../assets/banner5.jpg';
import banner6 from '../../assets/banner6.jpg';

import banner4 from '../../assets/banner4.avif';

const Banner = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={2}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      breakpoints={{
        // Breakpoints for responsive design
        768: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
      }}
    >
      <SwiperSlide>
        <img className='w-full h-96' src={banner1} alt="Luxury Villa with Ocean View" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='w-full h-96' src={banner2} alt="Modern Condo in Downtown" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='w-full h-96' src={banner5} alt="Luxury Penthouse with City Views" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='w-full h-96' src={banner4} alt="Spacious Family Home" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='w-full h-96' src={banner3} alt="Cozy Cottage by the Lake" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='w-full h-96' src={banner6} alt="Modern Loft in Historic Building" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
