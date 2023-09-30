import React from "react";
import SimpleImageSlider from "react-simple-image-slider";

const Slider = ({ images }) => {
  return (
    <div className="slider__container">
      {images && (
        <SimpleImageSlider
          width={350}
          height={250}
          images={images}
          showBullets={true}
          showNavs={true}
        />
      )}
    </div>
  );
};

export default Slider;
