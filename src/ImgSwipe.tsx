import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import slide1 from './Asset/IMG_slide1.jpg';
import slide2 from './Asset/IMG_slide2.jpg';
import slide3 from './Asset/IMG_slide3.jpg';
import slide4 from './Asset/IMG_slide4.jpg';
import './ImgSwipe.css';

export default function Swipe(){
    const data = [
        "./Asset/IMG_slide1.jpg",
        "./Asset/IMG_slide2.jpg",
        "./Asset/IMG_slide3.jpg",
        "./Asset/IMG_slide4.jpg"
    ]
    return(
        <div>
            <Swiper
                className='activity-split-right-slider'
                modules={[Autoplay]}
                loop={true}
                autoplay={{delay:0}}
                slidesPerView={3}
                speed={3000}>
                <SwiperSlide><img src={slide1} width="90%" alt="1"></img></SwiperSlide>
                <SwiperSlide><img src={slide2} width="90%" alt="2"></img></SwiperSlide>
                <SwiperSlide><img src={slide3} width="90%" alt="3"></img></SwiperSlide>
                <SwiperSlide><img src={slide4} width="90%" alt="4"></img></SwiperSlide>
            </Swiper>
        </div>
    )
}