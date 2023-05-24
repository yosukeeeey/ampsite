import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
/*
import imgSample from "./img1.jpg";
import imgSample1 from "./img2.jpg";
import imgSample2 from "./img3.jpg";
*/
import imgSample from "./img4.jpg";
import imgSample1 from "./img5.jpg";
import imgSample2 from "./img6.jpg";


const sliderSettings = {
  autoplay: true, // スライドを自動再生
  autoplaySpeed: 4500,
  infinite: true, // コンテンツループ
  arrows: false, // 「前」「次」のスライドを操作する矢印を非表示
  cssEase: "linear",
  speed: 500, // スライドアニメーションのスピード
  variableWidth: true,
  fade: true,
};

const carouselItems = [
  { image: imgSample, alt: "" },
  { image: imgSample1, alt: "" },
  { image: imgSample2, alt: "" },
];

const Carousel = () => {
  return (
    <div style={{width:"600px",margin:"50px auto",background:"content-box"}}>
      <Slider {...sliderSettings}>
        {carouselItems.map((carouselItem, index) => (
          <div key={index} style={{width:"600px",textAlign:"center"}}>
            <img
              src={carouselItem.image}
              alt={carouselItem.alt}
              width="100%"
              height="600px"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;