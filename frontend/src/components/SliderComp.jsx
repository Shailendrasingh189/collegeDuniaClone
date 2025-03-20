import { useState, useRef } from "react";
import Slider from "react-slick";

const SampleNextArrow = ({ className, style, onClick, disabled }) => {
  return (
    <div
      className={`-right-1 ${className} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } hidden sm:hidden`}
      style={{
        ...style,
        display: disabled ? "none" : "block",
      }}
      onClick={!disabled ? onClick : undefined}
    />
  );
};

const SamplePrevArrow = ({ className, style, onClick, disabled }) => {
  return (
    <div
      className={`-left-3 z-20 ${className} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }  `}
      style={{
        ...style,
        display: disabled ? "none" : "block",
      }}
      onClick={!disabled ? onClick : undefined}
    />
  );
};

const SliderComp = ({ children, responsive }) => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const sliderRef = useRef(null);

  const settings = {
    infinite: false,
    slidesToShow: 3, // Default value
    slidesToScroll: 3,
    // initialSlide: 0,
    // lazyLoad:true,
    nextArrow: <SampleNextArrow disabled={isEnd} />,
    prevArrow: <SamplePrevArrow disabled={isBeginning} />,
    afterChange: (current) => {
      const slider = sliderRef.current;
      if (slider) {
        setIsBeginning(current === 0);
        setIsEnd(
          current >= slider.props.children.length - settings.slidesToShow
        );
      }
    },
    responsive: responsive, 
  };
  return (
    <div className="slider-container">
      <Slider ref={sliderRef} {...settings}>
        {children}
      </Slider>
    </div>
  );
};

export default SliderComp;
