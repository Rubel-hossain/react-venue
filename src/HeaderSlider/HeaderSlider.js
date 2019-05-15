import React from 'react';
import Slider from "react-slick";
import slide_one from "../resources/images/slide_04.jpg";
import slide_two from "../resources/images/slide_05.jpg";
import slide_three from "../resources/images/slide_06.jpg";
import CountDown from "../Countdown/Countdown";

export default function HeaderSlider() {

    const  settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      };

  return (
    <div style={{position: "relative"}}> 
    <div className="carrousel_wrapper" style={{overflow: "hidden",height: "100vh"}}>
        <Slider {...settings}>
            <div>
            <div className="carrousel_image" style={{
                height: "100vh",
                backgroundImage:`url(${slide_one})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat"
              }}>
              </div>
            </div>
            <div>
            <div className="carrousel_image" style={{
                height: "100vh",
                backgroundImage:`url(${slide_two})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat"
              }}>
              </div>
            </div>
            <div>
            <div className="carrousel_image" style={{
                height: "100vh",
                backgroundImage:`url(${slide_three})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat"
              }}>
              </div>
            </div>
        </Slider>
    </div>
    <div className="artist_name">
        <div className="wrapper">
          Shironamhin Band
        </div>
    </div>
    <CountDown/>
    </div>
  )
}
