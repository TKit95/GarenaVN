
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../App.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      // autoplay = {{ delay: 3000 }}
      pagination={{
        clickable: true, 
      }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <img className="HeaderSlide__Bg-Img" src="https://cdn.vn.garenanow.com/web/lol-product/home/images/Lan_h3lpm3/03_2022/202202-117-Poro-1220x400.jpg" />
      </SwiperSlide>
      
      <SwiperSlide>
      <img className="HeaderSlide__Bg-Img" src="https://cdn.vn.garenanow.com/web/lol-product/home/images/Lan_h3lpm3/03_2022/202202-126-TruyTimKhoBau-1220x400.jpg" />
      </SwiperSlide>
      
      <SwiperSlide>
      <img className="HeaderSlide__Bg-Img" src="https://cdn.vn.garenanow.com/web/lol-product/home/images/Lan_h3lpm3/02_2022/202202-076-Ve-1220x400.jpg" />
      </SwiperSlide>
      
      <SwiperSlide>
      <img className="HeaderSlide__Bg-Img" src="https://cdn.vn.garenanow.com/web/lol-product/home/images/Lan_h3lpm3/01_2022/TND/202201-120-Ve-1220x400.jpg" />
      </SwiperSlide>

      <SwiperSlide>
      <img className="HeaderSlide__Bg-Img" src="https://cdn.vn.garenanow.com/web/lol-product/home/images/Lan_h3lpm3/02_2022/202202-102-Topup50-1220x400.jpg" />
      </SwiperSlide>
    </Swiper>
  );
};